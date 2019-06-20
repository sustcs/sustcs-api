'use strict';

const Controller = require('egg').Controller;
const { parse, stringify } = require('qs');
const authPage = {
  weapp: '/pages/auth/auth?',
  h5: '',
};
const authRule = {
  prefix: 'string', // url in production
  scanType: { type: 'enum', values: [ 'weapp', 'h5' ] },
  param: 'string',
  action: 'string', // enum in production
};

class QrcodeController extends Controller {
  /**
   * General authorization operation
   */// ============================================================================================>
  async auth() {
    const { ctx, config } = this;
    const expire = config.qrCode.expire;
    const { prefix, scanType, param, action } = ctx.request.query;
    ctx.validate(authRule, parse(ctx.request.query));
    ctx.status = 200;
    ctx.body = {
      statusCode: 200,
      msg: {
        qrCode: prefix + scanType + authPage[scanType] + stringify({
          param, action,
        }),
        expire,
      },
    };
  }
}

module.exports = QrcodeController;
