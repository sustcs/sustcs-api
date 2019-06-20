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
  factory.define('teacher', app.model.Teacher, {
    name: factory.sequence('teacher.name', n => `name_${n}`),
    email: factory.sequence('teacher.email', n => `name_${n}@sust.edu.cn`),
  });
  factory.define('structure', app.model.Structure, {
    title: factory.sequence('structure.title', n => `title_${n}`),
    credit_elective: factory.sequence('structure.credit_elective', n => n),
    credit_required: factory.sequence('structure.credit_required', n => { 10 - n; }),
  });
};
