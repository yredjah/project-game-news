'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_vote_Article = sequelize.define('User_vote_Article', {
    idUser: DataTypes.INTEGER,
    idArticle: DataTypes.INTEGER
  }, {});
  User_vote_Article.associate = function(models) {
    // associations can be defined here
    models.User_vote_Article.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    models.User_vote_Article.belongsTo(models.Article, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return User_vote_Article;
};