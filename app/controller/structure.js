'use strict';

const Controller = require('egg').Controller;
class structureController extends Controller {
  /**
   * list all structures
   */// ============================================================================================>
  async index() {
    // get and check params
    const ctx = this.ctx;
    const query = {
      limit: ctx.helper.parseInt(ctx.query.limit),
      offset: ctx.helper.parseInt(ctx.query.offset),
      raw: true,
    };
    const list = await ctx.model.Structure.findAll(query);
    ctx.status = 200;
    ctx.body = list;
  }
  /**
   * show structure info
   */// ============================================================================================>
  async show() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const structure = await ctx.model.Structure.findByPk(id);
    if (!structure) {
      ctx.status = 404;
      ctx.body = {
        statusCode: 404,
        msg: "structure don't exist",
      };
      return;
    }
    ctx.status = 200;
    ctx.body = structure;
  }
  /**
   * create structure
   */// ============================================================================================>
  async create() {
    const ctx = this.ctx;
    const { title } = ctx.request.body;
    const structure = await ctx.model.Structure.findByTitle(title);
    if (structure !== null) {
      ctx.status = 403;
      ctx.body = {
        statusCode: 403,
        msg: 'structure exist',
      };
      return;
    }
    const result = await ctx.model.Structure.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = {
      id: result.id,
    };
  }
  /**
   * update structure info
   */// ============================================================================================>
  async update() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const structure = await ctx.model.Structure.findByPk(id);
    if (!structure) {
      ctx.status = 404;
      ctx.body = {
        statusCode: 404,
        msg: "structure don't exist",
      };
      return;
    }
    const data = ctx.request.body;
    await structure.update(data);
    ctx.status = 204;
  }
  /**
   * delete structure
   */// ============================================================================================>
  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const structure = await ctx.model.Structure.findByPk(id);
    if (!structure) {
      ctx.status = 404;
      return;
    }

    await structure.destroy();
    ctx.status = 200;
  }
}

module.exports = structureController;
