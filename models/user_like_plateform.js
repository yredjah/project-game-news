'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_like_Plateform = sequelize.define('User_like_Plateform', {
    userId: DataTypes.INTEGER,
    plateformId: DataTypes.INTEGER,
  }, {});
  User_like_Plateform.associate = function(models) {
    // associations can be defined here
    models.User_like_Plateform.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
    models.User_like_Plateform.belongsTo(models.Plateform, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return User_like_Plateform;
};
