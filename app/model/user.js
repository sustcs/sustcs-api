'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('users', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    username: STRING,
    avatarUrl: STRING,
    openid: { type: STRING, primaryKey: true },
    school_id: STRING,
    type: STRING,
    real_name: STRING,
    created_at: DATE,
    updated_at: DATE,
  });
  User.findByOpenid = async function(openid) {
    return await this.findOne({
      where: {
        openid,
      },
    });
  };
  return User;
};
