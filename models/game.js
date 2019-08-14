'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    name: DataTypes.STRING,
  }, {});
  Game.associate = function(models) {
    // associations can be defined here
    models.Game.hasMany(models.Game_has_Genre);
    models.Game.hasMany(models.Game_has_Plateform);
    models.Game.hasMany(models.Article);
  };
  return Game;
};
