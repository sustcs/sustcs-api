'use strict';

module.exports = app => {
  const { INTEGER, DATE, STRING, TEXT } = app.Sequelize;

  const Teacher = app.model.define('teachers', {
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
  Teacher.findByName = async function(name) {
    return await this.findOne({
      where: {
        name,
      },
    });
  };
  return Teacher;
};
