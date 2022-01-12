const expess = require('express');
const app = expess()
var user = require('./controller/userController')

const port = 3000;
// require('./models')
// app.get('/', (req, res)=>{
//     res.send({data : 'hello world'})
// })
// console.log(user)
app.get('/', user.addUser)

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})