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
          priority: 1,
        },
        {
          description: 'Daily com o time',
          priority: 2,
        },
        {
          description: 'Sair com cachorro',
          priority: 3,
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
