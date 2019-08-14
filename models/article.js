'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    title: DataTypes.STRING,
    text: DataTypes.STRING,
    resume: DataTypes.STRING,
    videoId: DataTypes.STRING,
    image: DataTypes.STRING,
    date: DataTypes.DATE,
    like: DataTypes.INTEGER,
    dislike: DataTypes.INTEGER,
    // gameId: DataTypes.INTEGER,
    // userId: DataTypes.INTEGER,
  }, {});
  Article.associate = function(models) {
    // associations can be defined here
    models.Article.hasMany(models.Commentary);
    models.Article.hasMany(models.User_favorites_Article);
    models.Article.hasMany(models.User_vote_Article);
    models.Article.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
    models.Article.belongsTo(models.Game, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Article;
};
