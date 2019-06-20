'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/qrcode', controller.qrcode.auth);
  require('./router/user')(app);
  router.resources('introductions', '/introductions', controller.introduction);
  router.resources('teachers', '/teachers', controller.teacher);
  router.resources('structures', '/structures', controller.structure);
  router.resources('courses', '/courses', controller.course);
  router.resources('competitions', '/competitions', controller.competition);
};
