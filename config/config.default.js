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
  return config;
};
