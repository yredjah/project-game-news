'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_favorites_Article = sequelize.define('User_favorites_Article', {
    userId: DataTypes.INTEGER,
    articleId: DataTypes.INTEGER,
  }, {});
  User_favorites_Article.associate = function(models) {
    // associations can be defined here
    models.User_favorites_Article.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
    models.User_favorites_Article.belongsTo(models.Article, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return User_favorites_Article;
};
