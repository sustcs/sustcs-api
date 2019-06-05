'use strict';

module.exports = app => {
  const jsonp = app.jsonp();
  app.router.resources('users', '/users', jsonp, app.controller.user);
};
