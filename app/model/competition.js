'use strict';

module.exports = app => {
  const { INTEGER, DATE, STRING, TEXT } = app.Sequelize;

  const Competition = app.model.define('competitions', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: STRING,
    poster: STRING,
    type: STRING,
    synopsis: TEXT,
    description: STRING,
    created_at: DATE,
    updated_at: DATE,
  });
  return Competition;
};
