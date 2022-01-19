'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('employees', {
      skill: {
        type: Sequelize.STRING
      },
      emp_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dob: {
        type: Sequelize.DATE
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      sex: {
        type: Sequelize.STRING
      },
      salary: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('employees');
  }
};