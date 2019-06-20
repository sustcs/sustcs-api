'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.status = 200;
    ctx.body = JSON.stringify({
      introduction_url: `${ctx.protocol}://${ctx.host}/introductions`,
      user_url: `${ctx.protocol}://${ctx.host}/users`,
      qrcode_url: `${ctx.protocol}://${ctx.host}/qrcode`,
      teacher_url: `${ctx.protocol}://${ctx.host}/teachers`,
      competition_url: `${ctx.protocol}://${ctx.host}/competitions`,
    }, null, '\t');
  }
}

module.exports = HomeController;
