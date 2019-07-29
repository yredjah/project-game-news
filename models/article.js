'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    isFavorite: DataTypes.BOOLEAN,
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    text: DataTypes.STRING,
    media: DataTypes.STRING,
    date: DataTypes.DATE
  }, {});
  Article.associate = function(models) {
    models.Article.BelongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    models.Article.BelongsTo(models.Game, {
      foreignKey: {
        allowNull: false
      }
    });
    models.Article.HasMany(models.Commentary, {
      foreignKey: {
        allowNull: true
      }
    });
    models.Article.HasMany(models.Like, {
      foreignKey: {
        allowNull: true
      }
    });
  };
  return Article;
};
