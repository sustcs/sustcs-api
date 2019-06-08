'use strict';

const Controller = require('egg').Controller;
const {stringify} = require('qs');
const authPage = {
  "weapp": "/pages/auth/auth?",
  "h5": ""
};
const expire = 60;

class QrcodeController extends Controller {
  /**
   * General authorization operation
   */// ============================================================================================>
  async auth() {
    const { ctx } = this;
    const { prefix, scanType, key, action } = ctx.request.query;
    ctx.status = 200;
    ctx.body = {
      statusCode: 1,
      msg: {
        qrCode: prefix + scanType + authPage[scanType] + stringify({
          key,action
        }),
        expire: expire,
      }
    };
  }
}

module.exports = QrcodeController;
