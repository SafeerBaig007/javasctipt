
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.removeColumn('employees','createdAt');
    queryInterface.removeColumn('departments','createdAt');
    queryInterface.removeColumn('projects','createdAt');
    queryInterface.removeColumn('employees','updatedAt')
    queryInterface.removeColumn('projects','updatedAt')
    queryInterface.removeColumn('departments','updatedAt')
    // queryInterface.removeColumn('departments',['createdAt','updatedAt']);
    // queryInterface.removeColumn('projects',['createdAt','updatedAt']);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
