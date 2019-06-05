'use strict';

const Controller = require('egg').Controller;
class SubjectController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      create: 'https://api.github.com/user',
      current_user_authorizations_html_url: 'https://github.com/settings/connections/applications{/client_id}',
    };
  }
  async list() {
    const { ctx } = this;
    const list = await ctx.service.subject.all();
    ctx.body = list;
  }
  /**
   * @function GET
   * @function {show column info}
   */
  async show() {
    const { ctx } = this;
    const id = ctx.params.id;
    const column = await ctx.service.subject.find(id);
    ctx.body = column;
  }
}

module.exports = SubjectController;
