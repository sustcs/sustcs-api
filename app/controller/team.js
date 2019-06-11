'use strict';

const Controller = require('egg').Controller;

class TeamController extends Controller {
  async chat() {
    await this.ctx.render('team');
  }
}

module.exports = TeamController;
