'use strict';

module.exports = app => {
  // const jsonp = app.jsonp();
  const { router, controller, io } = app;
  router.resources('users', '/users', controller.user);
  router.post('/users/login', controller.user.login);
  // socket.io
  io.of('/qrcode').route('auth', io.controller.qrcode.auth);
  io.of('/team').route('broadcast', io.controller.team.chat);
};
