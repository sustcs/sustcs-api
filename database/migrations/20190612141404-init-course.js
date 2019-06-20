'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 courses 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, TEXT, BOOLEAN } = Sequelize;
    await queryInterface.createTable('courses', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING,
      cover: STRING,
      github: STRING,
      description: TEXT,
      created_at: DATE,
      updated_at: DATE,
      required: BOOLEAN,
    });
  },
  // 在执行数据库降级时调用的函数，删除 courses 表
  down: async queryInterface => {
    await queryInterface.dropTable('courses');
  },
};
