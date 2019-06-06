'use strict';

const Controller = require('egg').Controller;
const authPage = {
  "login": "weapp/pages/auth/auth?key=",
  "init": "weapp/pages/index/index?key="
};
const expire = 60;
class QrcodeController extends Controller {
  /**
   * General authorization operation
   */// ============================================================================================>
  async auth() {
    const { ctx } = this;
    const { uuid, action } = ctx.request.body;
    if (!action in authPage) {
      ctx.status = 400;
      ctx.body = {
        msg: "Undefined action"
      }
      return ;
    } 
    ctx.status = 200;
    ctx.body = {
      uuid: uuid,
      qrCodeContent: authPage[action] + uuid,
      expire: expire,
      msg: "success"
    };
  }
}

module.exports = QrcodeController;
