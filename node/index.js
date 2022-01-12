const { Sequelize, DataTypes } = require('sequelize');


// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('safeerbaig', 'safeerbaig', '', {
  host: 'localhost',
  dialect: 'postgres' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});


const db ={}
db.Sequelize = Sequelize
db.sequelize = sequelize


db.

sequelize.authenticate()
.then(()=>{
    console.log('sequelize is connected')
})
.catch((e)=>{
    console.log('error', e);
})