'use strict';

exports.sequelize = {
  dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'sustcs-unittest',
};
exports.qrCode = {
  expire: 300,
};
