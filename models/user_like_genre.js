'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_like_Genre = sequelize.define('User_like_Genre', {
    userId: DataTypes.INTEGER,
    genreId: DataTypes.INTEGER,
  }, {});
  User_like_Genre.associate = function(models) {
    // associations can be defined here
    models.User_like_Genre.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
    models.User_like_Genre.belongsTo(models.Genre, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return User_like_Genre;
};
