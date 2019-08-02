'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    mail: DataTypes.STRING,
    password: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    avatar: DataTypes.STRING,
    roleId: DataTypes.INTEGER,
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    models.User.belongsTo(models.Role, {
      foreignKey: {
        allowNull: false,
      },
    });
    models.User.hasMany(models.Commentary);
    models.User.hasMany(models.User_vote_Article);
    models.User.hasMany(models.Article);
    models.User.hasMany(models.User_favorites_Article);
    models.User.hasMany(models.User_like_Plateform);
    models.User.hasMany(models.User_like_Genre);
  };
  return User;
};
