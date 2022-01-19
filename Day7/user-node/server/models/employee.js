'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      employee.belongsTo(models.departments,{
        foreignKey :'dept_number',
      })
    }
  };
  employee.init({
    skill: DataTypes.STRING,
    emp_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true // Automatically gets converted to SERIAL for postgres
    },
    dob: DataTypes.DATE,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    title: DataTypes.STRING,
    address: DataTypes.STRING,
    sex: DataTypes.STRING,
    salary: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'employee',
    timestamps: false
  });
  return employee;
};