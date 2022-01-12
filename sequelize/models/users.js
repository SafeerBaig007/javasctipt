

module.exports = (sequelize, DataTypes)=>{
    const Users = sequelize .define('users', {
        name : {
             type : DataTypes.STRING,
             defaultValue : 'safeer baig'
        },
        email : {
            type : DataTypes.STRING,
            defaultValue : 'safeer.baig@invozone.com'
       },
       gender : {
            type : DataTypes.STRING,
            defaultValue : true
        }
    },
    )
}