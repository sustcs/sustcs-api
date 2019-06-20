'use strict';

const { assert, app } = require('egg-mock/bootstrap');

describe('test/app/controller/user.test.js', () => {
  describe('GET /users', () => {
    it('should work', async () => {
      // 通过 factory-girl 快速创建 user 对象到数据库中
      await app.factory.createMany('user', 3);
      const res = await app.httpRequest().get('/users?limit=2');
      assert(res.status === 200);
      assert(res.body.length === 2);
      assert(res.body[0].openid);
    });
  });

  describe('GET /users/:openid', () => {
    it('should work', async () => {
      const user = await app.factory.create('user');
      const res = await app.httpRequest().get(`/users/${user.openid}`);
      assert(res.status === 200);
      assert(res.body.openid === user.openid);
    });
  });

  describe('POST /users', () => {
    it('should work', async () => {
      app.mockCsrf();
      const res = await app.httpRequest().post('/users')
        .send({
          openid: `openid${(new Date()).getTime()}`,
        });
      assert(res.status === 201);
      assert(res.body.id);

      const getRes = await app.httpRequest().get(`/users/${res.body.openid}`);
      assert(getRes.status === 200);
      assert(getRes.body.id === res.body.id);
    });
  });
  describe('PUT /users/:openid', () => {
    it('should work', async () => {
      app.mockCsrf();
      const user = await app.factory.create('user');
      let res = await app.httpRequest().put(`/users/${user.openid}`)
        .send({
          username: 'test_update',
        });
      assert(res.status === 204);
      res = await app.httpRequest().get(`/users/${user.openid}`);
      assert(res.status === 200);
      assert(res.body.username === 'test_update');
    });
  });
  describe('DELETE /users/:id', () => {
    it('should work', async () => {
      const user = await app.factory.create('user');

      app.mockCsrf();
      const res = await app.httpRequest().delete(`/users/${user.id}`);
      assert(res.status === 200);
    });
  });
  describe('LOGIN /users/login', () => {
    // register
    it('should work', async () => {
      app.mockCsrf();
      const user = await app.factory.create('user');
      // bind
      let res = await app.httpRequest().put(`/users/${user.openid}`)
        .send({
          school_id: '1901',
          type: 'teacher',
        });
      assert(res.status === 204);
      // login
      res = await app.httpRequest().post('/users/login')
        .send({
          username: '1901',
          avatarUrl: 'https://code.visualstudio.com/assets/images/microsoft-logo.png',
        });
      assert(res.status === 200);
      assert(res.body.msg.status === 'ok');
      // type error
      res = await app.httpRequest().post('/users/login')
        .send({
          username: '201506021018',
          avatarUrl: 'https://code.visualstudio.com/assets/images/microsoft-logo.png',
        });
      assert(res.status === 403);
      assert(res.body.msg.status === 'error');
    });
  });
});
