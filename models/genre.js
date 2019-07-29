'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    name: DataTypes.STRING
  }, {});
  Genre.associate = function(models) {
    models.Genre.HasMany(models.User, {
      foreignKey: {
        allowNull: true
      }
    });
    models.Genre.HasMany(models.Game, {
      foreignKey: {
        allowNull: true
      }
    });
  };
  return Genre;
};
