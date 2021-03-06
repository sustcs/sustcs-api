'use strict';

const Controller = require('egg').Controller;
class teamController extends Controller {
  /**
   * list all teams
   */// ============================================================================================>
  async index() {
    // get and check params
    const ctx = this.ctx;
    const query = {
      limit: ctx.helper.parseInt(ctx.query.limit),
      offset: ctx.helper.parseInt(ctx.query.offset),
      raw: true,
    };
    const list = await ctx.model.Team.findAll(query);
    ctx.status = 200;
    ctx.body = list;
  }
  /**
   * show team info
   */// ============================================================================================>
  async show() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const team = await ctx.model.Team.findByPk(id);
    if (!team) {
      ctx.status = 404;
      ctx.body = {
        statusCode: 404,
        msg: "team don't exist",
      };
      return;
    }
    ctx.status = 200;
    ctx.body = team;
  }
  /**
   * create team
   */// ============================================================================================>
  async create() {
    const ctx = this.ctx;
    const { title, description, enable } = ctx.request.body;
    const team = await ctx.model.Team.findByTitle(title);
    if (team !== null) {
      ctx.status = 403;
      ctx.body = {
        statusCode: 403,
        msg: 'team exist',
      };
      return;
    }
    const result = await ctx.model.Team.create({ title, description, enable });
    ctx.status = 201;
    ctx.body = result;
  }
  /**
   * update team info
   */// ============================================================================================>
  async update() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const team = await ctx.model.Team.findByPk(id);
    if (!team) {
      ctx.status = 404;
      ctx.body = {
        statusCode: 404,
        msg: "team don't exist",
      };
      return;
    }
    const data = ctx.request.body;
    await team.update(data);
    ctx.status = 204;
  }
  /**
   * delete team
   */// ============================================================================================>
  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const team = await ctx.model.Team.findByPk(id);
    if (!team) {
      ctx.status = 404;
      return;
    }

    await team.destroy();
    ctx.status = 200;
  }
}

module.exports = teamController;
