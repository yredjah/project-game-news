'use strict';
module.exports = (sequelize, DataTypes) => {
  const Commentary = sequelize.define('Commentary', {
    commentary: DataTypes.STRING,
    // articleId: DataTypes.INTEGER,
    // userId: DataTypes.INTEGER,
  }, {});
  Commentary.associate = function(models) {
    // associations can be defined here
    models.Commentary.belongsTo(models.Article, {
      foreignKey: {
        allowNull: false,
      },
    });
    models.Commentary.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Commentary;
};
