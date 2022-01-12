const {Sequelize, DataTypes} = require('sequelize')
const sequelize = new Sequelize('safeerbaig', 'safeerbaig', '', {
    host: 'localhost',
    dialect: 'postgres' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize.authenticate()
.then(()=>{
    console.log('sequelize is authenticated')
}).catch((e)=>{
    console.log(e)
})

const db = {}

db.sequelize = sequelize;
db.Sequelize = Sequelize

db.users = require('../models/users') (sequelize, DataTypes)
db.student = require('../models/staudent') (sequelize, DataTypes)


db.sequelize.sync().then(()=>{
    console.log('your table is created')
})

module.exports = db