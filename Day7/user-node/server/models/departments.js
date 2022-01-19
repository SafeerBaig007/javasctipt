'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class departments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      departments.hasOne(models.employee,{
        foreignKey : 'dept_number'
      })
      departments.hasMany(models.project,{
        foreignKey : 'dept_number'
      })
    }
  };
  departments.init({
    dept_number: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true // Automatically gets converted to SERIAL for postgres
    },
    dept_name: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'departments',
    timestamps:false
  });
  return departments;
};