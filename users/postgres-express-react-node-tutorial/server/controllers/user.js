const UserModel = require('../models').users

const printHelloWorld = (req, res) => {
    res.send('\n hello world')
};

const getAllUsers = async(req, res) => {
    try{
        let users = await UserModel.findAll();
        res.send(users);
    }
    catch(e){
        if(!e.status) {
          res.status(500).json( { error: { code: 'UNKNOWN_ERROR', message: 'An unknown error occurred.' } });
        } else {
            res.status(e.status).json( { error: { code: e.code, message: e.message } });
        }
    }
  }

  const addUser = async (req, res)=>{
      try {
          let newUser = {
              firstName : req.body.firstName,
              lastName : req.body.lastName,
              nic: req.body.nic,
              dob: req.body.dob,
              email : req.body.email,
              createdAt: req.body.createdAt,
              updatedAt : req.body.updatedAt,
          }
          await UserModel.create(newUser)
          res.status(201).send(newUser)
      } catch (error) {
          console.log('ooooo')
            return res.status(400).json({
              success: false,
              msg: error.errors.map(err => err.message)
            })
      }
  }
module.exports = {
    printHelloWorld,
    getAllUsers,
    addUser
}