'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 structures 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, TEXT } = Sequelize;
    await queryInterface.createTable('structures', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      title: STRING,
      credit_elective: INTEGER,
      credit_required: INTEGER,
      description: TEXT,
      created_at: DATE,
      updated_at: DATE,
    });
  },
  // 在执行数据库降级时调用的函数，删除 structures 表
  down: async queryInterface => {
    await queryInterface.dropTable('structures');
  },
};
