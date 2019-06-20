'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 introductions 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, TEXT, BOOLEAN } = Sequelize;
    await queryInterface.createTable('introductions', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      title: STRING,
      description: TEXT,
      enable: { type: BOOLEAN, allowNull: false, defaultValue: true },
      created_at: DATE,
      updated_at: DATE,
    });
  },
  // 在执行数据库降级时调用的函数，删除 user 表
  down: async queryInterface => {
    await queryInterface.dropTable('introductions');
  },
};
