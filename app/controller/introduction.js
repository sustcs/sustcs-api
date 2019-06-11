'use strict';

const Controller = require('egg').Controller;
class IntroductionController extends Controller {
  /**
   * list all introductions
   */// ============================================================================================>
  async index() {
    // get and check params
    const ctx = this.ctx;
    const query = {
      limit: ctx.helper.parseInt(ctx.query.limit),
      offset: ctx.helper.parseInt(ctx.query.offset),
      where: { enable: true },
      raw: true,
    };
    const list = await ctx.model.Introduction.findAll(query);
    ctx.status = 200;
    ctx.body = list;
  }
  /**
   * show introduction info
   */// ============================================================================================>
  async show() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const introduction = await ctx.model.Introduction.findByPk(id);
    if (!introduction) {
      ctx.status = 404;
      ctx.body = {
        statusCode: 404,
        msg: "introduction don't exist",
      };
      return;
    }
    ctx.status = 200;
    ctx.body = introduction;
  }
  /**
   * create introduction
   */// ============================================================================================>
  async create() {
    const ctx = this.ctx;
    const { title, description, enable } = ctx.request.body;
    const introduction = await ctx.model.Introduction.findByTitle(title);
    if (introduction !== null) {
      ctx.status = 403;
      ctx.body = {
        statusCode: 403,
        msg: 'introduction exist',
      };
      return;
    }
    const result = await ctx.model.Introduction.create({ title, description, enable });
    ctx.status = 201;
    ctx.body = result;
  }
  /**
   * update introduction info
   */// ============================================================================================>
  async update() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const introduction = await ctx.model.Introduction.findByPk(id);
    if (!introduction) {
      ctx.status = 404;
      ctx.body = {
        statusCode: 404,
        msg: "introduction don't exist",
      };
      return;
    }
    const data = ctx.request.body;
    await introduction.update(data);
    ctx.status = 204;
  }
  /**
   * delete introduction
   */// ============================================================================================>
  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const introduction = await ctx.model.Introduction.findByPk(id);
    if (!introduction) {
      ctx.status = 404;
      return;
    }

    await introduction.destroy();
    ctx.status = 200;
  }
}

module.exports = IntroductionController;
