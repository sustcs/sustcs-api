'use strict';

const { assert, app } = require('egg-mock/bootstrap');

describe('test/app/controller/teacher.test.js', () => {
  describe('GET /teachers', () => {
    it('should work', async () => {
      // 通过 factory-girl 快速创建 teacher 对象到数据库中
      await app.factory.createMany('teacher', 3);
      const res = await app.httpRequest().get('/teachers?limit=2');
      assert(res.status === 200);
      assert(res.body.length === 2);
      assert(res.body[0].name);
    });
  });

  describe('GET /teachers/:id', () => {
    it('should work', async () => {
      const teacher = await app.factory.create('teacher');
      const res = await app.httpRequest().get(`/teachers/${teacher.id}`);
      assert(res.status === 200);
      assert(res.body.name === teacher.name);
    });
  });

  describe('POST /teachers', () => {
    it('should work', async () => {
      app.mockCsrf();
      let res = await app.httpRequest().post('/teachers')
        .send({
          name: 'test',
          email: 'test@sust.edu.cn',
        });
      assert(res.status === 201);
      assert(res.body.id);

      res = await app.httpRequest().get(`/teachers/${res.body.id}`);
      assert(res.status === 200);
      assert(res.body.name === 'test');
    });
  });
  describe('PUT /teachers/:id', () => {
    it('should work', async () => {
      app.mockCsrf();
      const teacher = await app.factory.create('teacher');
      let res = await app.httpRequest().put(`/teachers/${teacher.id}`)
        .send({
          name: 'test',
        });
      assert(res.status === 204);

      res = await app.httpRequest().get(`/teachers/${teacher.id}`);
      assert(res.status === 200);
      assert(res.body.name === 'test');
    });
  });
  describe('DELETE /teachers/:id', () => {
    it('should work', async () => {
      const teacher = await app.factory.create('teacher');

      app.mockCsrf();
      const res = await app.httpRequest().delete(`/teachers/${teacher.id}`);
      assert(res.status === 200);
    });
  });
});
