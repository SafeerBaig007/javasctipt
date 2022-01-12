
module.exports = (sequelize, DataTypes)=> {
    const Student = sequelize.define('student',{
        name:{
            type: DataTypes.STRING
        },
        class:{
            type: DataTypes.STRING
        },
        section: {
            type : DataTypes.STRING
        }
    },{
        // timestamp : false
        createdAt : 'created_at'
    })
}