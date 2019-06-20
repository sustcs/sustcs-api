'use strict';

const { assert, app } = require('egg-mock/bootstrap');

describe('test/app/controller/qrcode.test.js', () => {
  describe('GET /qrcode', () => {
    it('should work', async () => {
      const res = await app.httpRequest().get('/qrcode?prefix=http://localhost:7001&scanType=weapp&param=abcdefg&action=login');
      assert(res.status === 200);
      assert(res.body.msg.qrCode);
    });
  });
});
