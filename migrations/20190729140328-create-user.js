'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      mail: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      firstname: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      userFAVORIS: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      lastname: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      birthdate: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      role: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      avatar: {
        allowNull: true,
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
      idArticles: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Articles',
          key: 'id',
        },
      },
      idCommentaries: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Commentaries',
          key: 'id',
        },
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
