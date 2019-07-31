'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game_has_Genre = sequelize.define('Game_has_Genre', {
    idGenre: DataTypes.INTEGER,
    idGame: DataTypes.INTEGER
  }, {});
  Game_has_Genre.associate = function(models) {
    // associations can be defined here
    models.Game_has_Genre.belongsTo(models.Game, {
      foreignKey: {
        allowNull: false
      }
    });
    models.Game_has_Genre.belongsTo(models.Genre, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Game_has_Genre;
};