'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  app.router.get('/', app.controller.home.index);
  require('./router/user')(app);
};
