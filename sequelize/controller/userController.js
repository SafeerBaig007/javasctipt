let db = require('../models')

let User = db.users

var addUser = async (req, res)=>{
    console.log(db)

    // let data = await User.create({name : 'safeer', email: 'safeer@email.com', gender:true})
    res.status(200).json({
        name : 'safeer baig'
    })
}

module.exports = {
    addUser
}