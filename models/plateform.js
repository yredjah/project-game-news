'use strict';
module.exports = (sequelize, DataTypes) => {
  const Plateform = sequelize.define('Plateform', {
    name: DataTypes.STRING,
  }, {});
  Plateform.associate = function(models) {
    // associations can be defined here
    models.Plateform.hasMany(models.User_like_Plateform);
    models.Plateform.hasMany(models.Game_has_Plateform);
  };
  return Plateform;
};
