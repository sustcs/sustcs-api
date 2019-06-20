'use strict';

module.exports = app => {
  const { INTEGER, DATE, STRING, TEXT } = app.Sequelize;

  const Structure = app.model.define('structures', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: STRING,
    credit_elective: INTEGER,
    credit_required: INTEGER,
    description: TEXT,
    created_at: DATE,
    updated_at: DATE,
  });
  Structure.findByTitle = async function(title) {
    return await this.findOne({
      where: {
        title,
      },
    });
  };
  return Structure;
};
