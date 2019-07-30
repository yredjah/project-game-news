'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      idArticles: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Articles',
          key: 'id',
        },
      },
      idPlatformes: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Platformes',
          key: 'id',
        },
      },
      idGenres: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Genres',
          key: 'id',
        },
      },
      name: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Games');
  }
};
