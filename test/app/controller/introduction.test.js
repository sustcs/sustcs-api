'use strict';

const { assert, app } = require('egg-mock/bootstrap');

describe('test/app/controller/introduction.test.js', () => {
  describe('GET /introductions', () => {
    it('should work', async () => {
      // 通过 factory-girl 快速创建 introduction 对象到数据库中
      await app.factory.createMany('introduction', 3);
      const res = await app.httpRequest().get('/introductions?limit=2');
      assert(res.status === 200);
      assert(res.body.length === 2);
      assert(res.body[0].title);
    });
  });

  describe('GET /introductions/:id', () => {
    it('should work', async () => {
      const introduction = await app.factory.create('introduction');
      const res = await app.httpRequest().get(`/introductions/${introduction.id}`);
      assert(res.status === 200);
      assert(res.body.title === introduction.title);
    });
  });

  describe('POST /introductions', () => {
    it('should work', async () => {
      app.mockCsrf();
      let res = await app.httpRequest().post('/introductions')
        .send({
          title: 'test',
          description: '<h3>description<h3>',
          enable: true,
        });
      assert(res.status === 201);
      assert(res.body.id);

      res = await app.httpRequest().get(`/introductions/${res.body.id}`);
      assert(res.status === 200);
      assert(res.body.title === 'test');
    });
  });
  describe('PUT /introductions/:id', () => {
    it('should work', async () => {
      app.mockCsrf();
      const introduction = await app.factory.create('introduction');
      let res = await app.httpRequest().put(`/introductions/${introduction.id}`)
        .send({
          title: 'test',
        });
      assert(res.status === 204);

      res = await app.httpRequest().get(`/introductions/${introduction.id}`);
      assert(res.status === 200);
      assert(res.body.title === 'test');
    });
  });
  describe('DELETE /introductions/:id', () => {
    it('should work', async () => {
      const introduction = await app.factory.create('introduction');

      app.mockCsrf();
      const res = await app.httpRequest().delete(`/introductions/${introduction.id}`);
      assert(res.status === 200);
    });
  });
});
