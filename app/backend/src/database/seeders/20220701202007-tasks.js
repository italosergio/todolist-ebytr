module.exports = {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert(
      'tasks',
      [
        {
          description: 'Reuniao Ebytr',
          priority: 3,
          status: false,
          date: new Date(),
        },
        {
          description: 'Daily com o time',
          priority: 2,
          status: false,
          date: new Date(),
        },
        {
          description: 'Sair com cachorro',
          priority: 0,
          status: true,
          date: new Date(),
        },
        {
          description: 'Beber Agua',
          priority: 1,
          status: false,
          date: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('tasks', null, {});
  },
};
