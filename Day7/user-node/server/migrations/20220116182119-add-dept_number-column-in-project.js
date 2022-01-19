'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.addConstraint('projects',{
      fields:['dept_number'],
      type : 'foreign key',
      name : 'dept-number-forign-key-project',
      references: { //Required field
        table: 'departments',
        field: 'dept_number'
      },
      onDelete: 'SET NULL',
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.removeConstraint('projects','dept-number-forign-key-project')
  }
};
