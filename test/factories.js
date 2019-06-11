'use strict';

const { factory } = require('factory-girl');

module.exports = app => {
  app.factory = factory;
  factory.define('user', app.model.User, {
    openid: factory.sequence('User.openid', n => `openid_${n}`),
  });
  factory.define('introduction', app.model.Introduction, {
    title: factory.sequence('introduction.title', n => `title_${n}`),
    description: factory.sequence('introduction.description', n => `<h3>title_${n}<h3>`),
    enable: true,
  });
};
