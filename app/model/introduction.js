'use strict';

module.exports = app => {
  const { INTEGER, DATE, STRING, TEXT, BOOLEAN } = app.Sequelize;

  const Introduction = app.model.define('introductions', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: STRING,
    description: TEXT,
    enable: { type: BOOLEAN, defaultValue: true },
    created_at: DATE,
    updated_at: DATE,
  });
  Introduction.findByTitle = async function(title) {
    return await this.findOne({
      where: {
        title,
      },
    });
  };
  return Introduction;
};
