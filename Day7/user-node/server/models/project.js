'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      project.belongsTo(models.departments,{
        foreignKey : 'dept_number'
      })
    }
  };
  project.init({
    pro_number: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true // Automatically gets converted to SERIAL for postgres
    },
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    start_date: DataTypes.DATE,
    duration: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'project',
    timestamps: false
  });
  return project;
};