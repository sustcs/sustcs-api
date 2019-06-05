/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  /**
   * keys
   * use for cookie sign key, should change to your own and keep security
   */// ============================================================================================>
  config.keys = appInfo.name + '_1558931615437_4946';
  /**
   * middleware
   */// ============================================================================================>
  config.middleware = [];
  /**
   * sequelize
   */// ============================================================================================>
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'egg-sequelize-doc-default',
  };
  return config;
};
