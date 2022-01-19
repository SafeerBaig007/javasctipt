'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.addConstraint('employees',{
      fields: ['dept_number'],
      type: 'foreign key',
      name : 'dept-number-forign-key-employee',
      references: { //Required field
        table: 'departments',
        field: 'dept_number'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.removeConstraint('employee','dept-number-forign-key-employee')
  }
};
