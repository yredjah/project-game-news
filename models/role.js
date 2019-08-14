'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: DataTypes.STRING,
  }, {});
  Role.associate = function(models) {
    // associations can be defined here
    models.Role.hasMany(models.User);
  };
  return Role;
};
