'use strict';

exports.sequelize = {
  dialect: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'egg-sequelize-doc-default',
};
exports.redis = {
  client: {
    port: 6379,
    host: '127.0.0.1',
    password: '',
    db: 0,
  },
};
exports.io = {
  init: {
    wsEngine: 'ws',
  }, // passed to engine.io
  namespace: {
    '/': {
      connectionMiddleware: [
        'auth',
      ],
      packetMiddleware: [],
    },
    '/example': {
      connectionMiddleware: [],
      packetMiddleware: [],
    },
  },

  redis: {
    host: '127.0.0.1',
    port: 6379,
  },
};
exports.security = {
  csrf: {
    enable: false
  },
};
exports.cors = {
  origin:[ '*' ],
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
};