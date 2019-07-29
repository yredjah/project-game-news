'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    mail: DataTypes.STRING,
    password: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    role: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    models.User.HasMany(models.Commentary);
    models.User.HasMany(models.Article);
    models.User.HasMany(models.Platforme);
    models.User.HasMany(models.Genre);
  };
  return User;
};
