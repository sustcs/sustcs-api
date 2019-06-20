'use strict';

module.exports = app => {
  const { INTEGER, DATE, STRING, TEXT, BOOLEAN } = app.Sequelize;

  const Introduction = app.model.define('introductions', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING,
    cover: STRING,
    github: STRING,
    description: TEXT,
    created_at: DATE,
    updated_at: DATE,
    required: BOOLEAN,
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
