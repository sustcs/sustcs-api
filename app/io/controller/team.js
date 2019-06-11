'use strict';

const Controller = require('egg').Controller;

class teamController extends Controller {
  async chat() {
    const { ctx, app } = this;
    const nsp = app.io.of('/team');
    const message = ctx.args[0] || {};
    const socket = ctx.socket;
    const client = socket.id;
    try {
      const { target, payload } = message;
      if (!target) return;
      const msg = ctx.helper.parseMsg('broadcast', payload, { client, target });
      nsp.emit(target, msg);
    } catch (error) {
      app.logger.error(error);
    }
  }
}

module.exports = teamController;
