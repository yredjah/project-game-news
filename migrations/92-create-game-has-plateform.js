'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Game_has_Plateforms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      gameId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Games',
          key: 'id',
        },
      },
      plateformId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Plateforms',
          key: 'id',
        },
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
    return queryInterface.dropTable('Game_has_Plateforms');
  },
};
