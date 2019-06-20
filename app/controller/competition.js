'use strict';

const Controller = require('egg').Controller;
class competitionController extends Controller {
  /**
   * list all competitions
   */// ============================================================================================>
  async index() {
    // get and check params
    const ctx = this.ctx;
    const query = {
      limit: ctx.helper.parseInt(ctx.query.limit),
      offset: ctx.helper.parseInt(ctx.query.offset),
      raw: true,
    };
    const list = await ctx.model.Competition.findAll(query);
    ctx.status = 200;
    ctx.body = list;
  }
  /**
   * show competition info
   */// ============================================================================================>
  async show() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const competition = await ctx.model.Competition.findByPk(id);
    if (!competition) {
      ctx.status = 404;
      ctx.body = {
        statusCode: 404,
        msg: "competition don't exist",
      };
      return;
    }
    ctx.status = 200;
    ctx.body = competition;
  }
  /**
   * create competition
   */// ============================================================================================>
  async create() {
    const ctx = this.ctx;
    const { title, description, enable } = ctx.request.body;
    const competition = await ctx.model.Competition.findByTitle(title);
    if (competition !== null) {
      ctx.status = 403;
      ctx.body = {
        statusCode: 403,
        msg: 'competition exist',
      };
      return;
    }
    const result = await ctx.model.competition.create({ title, description, enable });
    ctx.status = 201;
    ctx.body = result;
  }
  /**
   * update competition info
   */// ============================================================================================>
  async update() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const competition = await ctx.model.Competition.findByPk(id);
    if (!competition) {
      ctx.status = 404;
      ctx.body = {
        statusCode: 404,
        msg: "competition don't exist",
      };
      return;
    }
    const data = ctx.request.body;
    await competition.update(data);
    ctx.status = 204;
  }
  /**
   * delete competition
   */// ============================================================================================>
  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const competition = await ctx.model.Competition.findByPk(id);
    if (!competition) {
      ctx.status = 404;
      return;
    }

    await competition.destroy();
    ctx.status = 200;
  }
}

module.exports = competitionController;
