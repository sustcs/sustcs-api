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
};
