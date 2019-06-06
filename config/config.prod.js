'use strict';

exports.sequelize = {
  dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
  host: '114.116.18.221',
  port: 3306,
  username: 'egg',
  password: '123456',
  database: 'egg-sequelize-doc-unittest',
};
exports.security = {
  csrf: {
    enable: false
  },
};
exports.cors = {
  origin:'*', // modify
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
};