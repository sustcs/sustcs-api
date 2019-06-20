'use strict';

const Controller = require('egg').Controller;
class CourseController extends Controller {
  /**
   * list all courses
   */// ============================================================================================>
  async index() {
    // get and check params
    const ctx = this.ctx;
    const query = {
      limit: ctx.helper.parseInt(ctx.query.limit),
      offset: ctx.helper.parseInt(ctx.query.offset),
      raw: true,
    };
    const list = await ctx.model.Course.findAll(query);
    ctx.status = 200;
    ctx.body = list;
  }
  /**
   * show course info
   */// ============================================================================================>
  async show() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const course = await ctx.model.Course.findByPk(id);
    if (!course) {
      ctx.status = 404;
      ctx.body = {
        statusCode: 404,
        msg: "course don't exist",
      };
      return;
    }
    ctx.status = 200;
    ctx.body = course;
  }
  /**
   * create course
   */// ============================================================================================>
  async create() {
    const ctx = this.ctx;
    const { title, description, enable } = ctx.request.body;
    const course = await ctx.model.Course.findByTitle(title);
    if (course !== null) {
      ctx.status = 403;
      ctx.body = {
        statusCode: 403,
        msg: 'course exist',
      };
      return;
    }
    const result = await ctx.model.Course.create({ title, description, enable });
    ctx.status = 201;
    ctx.body = {
      id: result.id,
    };
  }
  /**
   * update course info
   */// ============================================================================================>
  async update() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const course = await ctx.model.Course.findByPk(id);
    if (!course) {
      ctx.status = 404;
      ctx.body = {
        statusCode: 404,
        msg: "course don't exist",
      };
      return;
    }
    const data = ctx.request.body;
    await course.update(data);
    ctx.status = 204;
  }
  /**
   * delete course
   */// ============================================================================================>
  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const course = await ctx.model.Course.findByPk(id);
    if (!course) {
      ctx.status = 404;
      return;
    }

    await course.destroy();
    ctx.status = 200;
  }
}

module.exports = CourseController;
