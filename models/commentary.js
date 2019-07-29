'use strict';
module.exports = (sequelize, DataTypes) => {
  const Commentary = sequelize.define('Commentary', {
    commentary: DataTypes.STRING,
    date: DataTypes.DATE
  }, {});
  Commentary.associate = function(models) {
    models.Commentary.BelongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    models.Commentary.BelongsTo(models.Article, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Commentary;
};
