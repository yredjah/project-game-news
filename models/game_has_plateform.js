'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game_has_Plateform = sequelize.define('Game_has_Plateform', {
    // gameId: DataTypes.INTEGER,
    // plateformId: DataTypes.INTEGER,
  }, {});
  Game_has_Plateform.associate = function(models) {
    // associations can be defined here
    models.Game_has_Plateform.belongsTo(models.Game, {
      foreignKey: {
        allowNull: false,
      },
    });
    models.Game_has_Plateform.belongsTo(models.Plateform, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Game_has_Plateform;
};
