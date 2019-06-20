'use strict';

const { assert, app } = require('egg-mock/bootstrap');

describe('test/app/controller/structure.test.js', () => {
  describe('GET /structures', () => {
    it('should work', async () => {
      // 通过 factory-girl 快速创建 structure 对象到数据库中
      await app.factory.createMany('structure', 3);
      const res = await app.httpRequest().get('/structures?limit=2');
      assert(res.status === 200);
      assert(res.body.length === 2);
      assert(res.body[0].title);
    });
  });

  describe('GET /structures/:id', () => {
    it('should work', async () => {
      const structure = await app.factory.create('structure');
      const res = await app.httpRequest().get(`/structures/${structure.id}`);
      assert(res.status === 200);
      assert(res.body.title === structure.title);
    });
  });

  describe('POST /structures', () => {
    it('should work', async () => {
      app.mockCsrf();
      let res = await app.httpRequest().post('/structures')
        .send({
          title: 'new_setting',
          credit_elective: 2,
          credit_required: 1,
        });
      assert(res.status === 201);
      assert(res.body.id);

      res = await app.httpRequest().get(`/structures/${res.body.id}`);
      assert(res.status === 200);
      assert(res.body.title === 'new_setting');
    });
  });
  describe('PUT /structures/:id', () => {
    it('should work', async () => {
      app.mockCsrf();
      const structure = await app.factory.create('structure');
      let res = await app.httpRequest().put(`/structures/${structure.id}`)
        .send({
          title: 'test',
        });
      assert(res.status === 204);

      res = await app.httpRequest().get(`/structures/${structure.id}`);
      assert(res.status === 200);
      assert(res.body.title === 'test');
    });
  });
  describe('DELETE /structures/:id', () => {
    it('should work', async () => {
      const structure = await app.factory.create('structure');

      app.mockCsrf();
      const res = await app.httpRequest().delete(`/structures/${structure.id}`);
      assert(res.status === 200);
    });
  });
});
