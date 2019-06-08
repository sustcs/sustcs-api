'use strict';

module.exports = app => {
  // const jsonp = app.jsonp();
  const { router, controller, io} = app;
  router.resources('users', '/users', controller.user);
  // socket.io
  io.of('/qrcode').route('auth', io.controller.qrcode.auth);
};
