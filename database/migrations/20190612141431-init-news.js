'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 user 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('news', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      username: STRING,
      avatar_url: STRING,
      openid: { type: STRING, primaryKey: true },
      school_id: STRING,
      type: STRING,
      real_name: STRING,
      created_at: DATE,
      updated_at: DATE,
    });
  },
  // 在执行数据库降级时调用的函数，删除 user 表
  down: async queryInterface => {
    await queryInterface.dropTable('news');
  },
};
