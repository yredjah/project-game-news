'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    name: DataTypes.STRING,
  }, {});
  Genre.associate = function(models) {
    // associations can be defined here
    models.Genre.hasMany(models.User_like_Genre);
    models.Genre.hasMany(models.Game_has_Genre);
  };
  return Genre;
};
