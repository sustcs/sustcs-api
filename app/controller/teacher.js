'use strict';

const Controller = require('egg').Controller;
class TeacherController extends Controller {
  /**
   * list all teachers
   */// ============================================================================================>
  async index() {
    // get and check params
    const ctx = this.ctx;
    const query = {
      limit: ctx.helper.parseInt(ctx.query.limit),
      offset: ctx.helper.parseInt(ctx.query.offset),
      raw: true,
    };
    const list = await ctx.model.Teacher.findAll(query);
    ctx.status = 200;
    ctx.body = list;
  }
  /**
   * show teacher info
   */// ============================================================================================>
  async show() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const teacher = await ctx.model.Teacher.findByPk(id);
    if (!teacher) {
      ctx.status = 404;
      ctx.body = {
        statusCode: 404,
        msg: "teacher don't exist",
      };
      return;
    }
    ctx.status = 200;
    ctx.body = teacher;
  }
  /**
   * create teacher
   */// ============================================================================================>
  async create() {
    const ctx = this.ctx;
    const { name } = ctx.request.body;
    const teacher = await ctx.model.Teacher.findByName(name);
    if (teacher !== null) {
      ctx.status = 403;
      ctx.body = {
        statusCode: 403,
        msg: 'teacher exist',
      };
      return;
    }
    const result = await ctx.model.Teacher.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = result;
  }
  /**
   * update teacher info
   */// ============================================================================================>
  async update() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const teacher = await ctx.model.Teacher.findByPk(id);
    if (!teacher) {
      ctx.status = 404;
      ctx.body = {
        statusCode: 404,
        msg: "teacher don't exist",
      };
      return;
    }
    const data = ctx.request.body;
    await teacher.update(data);
    ctx.status = 204;
  }
  /**
   * delete teacher
   */// ============================================================================================>
  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const teacher = await ctx.model.Teacher.findByPk(id);
    if (!teacher) {
      ctx.status = 404;
      return;
    }

    await teacher.destroy();
    ctx.status = 200;
  }
}

module.exports = TeacherController;
