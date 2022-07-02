'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tasks', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      description: { type: Sequelize.STRING },
      priority: { type: Sequelize.INTEGER },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('tasks');
  },
};
