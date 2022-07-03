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
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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