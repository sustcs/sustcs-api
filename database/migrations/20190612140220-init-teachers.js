'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 user 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, TEXT } = Sequelize;
    await queryInterface.createTable('teachers', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING,
      avatar: STRING,
      openid: STRING,
      email: STRING,
      title: STRING,
      position: STRING,
      office: STRING,
      phone: STRING,
      course: STRING,
      introduction: TEXT,
      created_at: DATE,
      updated_at: DATE,
    });
  },
  // 在执行数据库降级时调用的函数，删除 user 表
  down: async queryInterface => {
    await queryInterface.dropTable('teachers');
  },
};
