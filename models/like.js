'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    like: DataTypes.INTEGER,
    dislike: DataTypes.INTEGER
  }, {});
  Like.associate = function(models) {
    models.Like.BelongsTo(models.Article);
  };
  return Like;
};
