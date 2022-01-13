const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
var userRoutes = require('./server/routes/user');


// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning.',
}));

app.get('/getUser', (req, res)=>{
  res.status(200).send({
    msg: 'there is a user'
  })
})

app.post('/addingUser',(req, res)=>{
  console.log(req)
  res.status(201).send(req.body)
})

// app.use('/user',userRoutes);

module.exports = app;
