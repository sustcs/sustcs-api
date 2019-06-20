'use strict';

exports.sequelize = {
  dialect: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'api',
  password: 'api',
  database: 'api',
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
    '/qrcode': {
      connectionMiddleware: [
        'auth',
      ],
      packetMiddleware: [],
    },
    '/team': {
      connectionMiddleware: [
        'chat',
      ],
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
    enable: false,
  },
};
exports.cors = {
  origin: '*',
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
};
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.html': 'nunjucks',
  },
};
exports.qrCode = {
  expire: 300,
};
