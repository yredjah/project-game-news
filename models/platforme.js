'use strict';
module.exports = (sequelize, DataTypes) => {
  const Platforme = sequelize.define('Platforme', {
    name: DataTypes.STRING
  }, {});
  Platforme.associate = function(models) {
    models.Platforme.HasMany(models.User, {
      foreignKey: {
        allowNull: true
      }
    });
    models.Platforme.HasMany(models.Game, {
      foreignKey: {
        allowNull: true
      }
    });
  };
  return Platforme;
};
