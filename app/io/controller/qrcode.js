'use strict';

const Controller = require('egg').Controller;

class qrcodeController extends Controller {
  async auth() {
    const { ctx, app } = this;
    const nsp = app.io.of('/qrcode');
    const message = ctx.args[0] || {};
    const socket = ctx.socket;
    const client = socket.id;
    try {
      const { target, payload } = message;
      if (!target) return;
      const msg = ctx.helper.parseMsg('auth', payload, { client, target });
      nsp.emit(target, msg);
    } catch (error) {
      app.logger.error(error);
    }
  }
}

module.exports = qrcodeController;
