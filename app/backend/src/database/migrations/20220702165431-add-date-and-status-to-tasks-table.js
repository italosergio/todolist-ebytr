'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'tasks',
      'date',
      { 
        type: Sequelize.DATE,
        allowNull: false,
      },
    );
    await queryInterface.addColumn(
      'tasks',
      'status',
      {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'tasks',
      'date',
    );
    await queryInterface.removeColumn(
      'tasks',
      'status',
    );
  }
};