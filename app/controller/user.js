'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  /**
   * list all users
   */// ============================================================================================>
  async index() {
    // get and check params
    const ctx = this.ctx;
    const query = {
      limit: ctx.helper.parseInt(ctx.query.limit),
      offset: ctx.helper.parseInt(ctx.query.offset),
    };
    const list = await ctx.model.User.findAll(query);
    ctx.status = 200;
    ctx.body = list;
  }
  /**
   * show user info
   */// ============================================================================================>
  async show() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      ctx.status = 404;
      ctx.body = {
        statusCode: 404,
        msg: "User don't exist",
      };
      return;
    }
    ctx.status = 200;
    ctx.body = user;
  }
  /**
   * create user
   */// ============================================================================================>
  async create() {
    const ctx = this.ctx;
    const { openid } = ctx.request.body;
    const user = await ctx.model.User.findByOpenid(openid);
    if (user !== null) {
      ctx.status = 403;
      ctx.body = {
        statusCode: 403,
        msg: 'User exist',
      };
      return;
    }
    const result = await ctx.model.User.create({ openid });
    ctx.status = 201;
    ctx.body = result;
  }
  /**
   * update user info
   */// ============================================================================================>
  async update() {
    const ctx = this.ctx;
    const openid = ctx.helper.parseInt(ctx.params.id);
    const user = await ctx.model.User.findByOpenid(openid);
    if (!user) {
      ctx.status = 404;
      ctx.body = {
        statusCode: 404,
        msg: "User don't exist",
      };
      return;
    }
    const data = ctx.request.body;
    await user.update(data);
    ctx.status = 204;
  }
  /**
   * delete user
   */// ============================================================================================>
  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    await user.destroy();
    ctx.status = 200;
  }
}

module.exports = UserController;
