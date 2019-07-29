'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    name: DataTypes.STRING
  }, {});
  Game.associate = function(models) {
    models.Game.HasMany(models.Genre, {
      foreignKey: {
        allowNull: true
      }
    });
    models.Game.HasMany(models.Platforme, {
      foreignKey: {
        allowNull: true
      }
    });
    models.Game.HasMany(models.Article, {
      foreignKey: {
        allowNull: true
      }
    }); 
  };
  return Game;
};
