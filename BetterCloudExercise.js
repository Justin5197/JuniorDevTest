const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

var myArgs = process.argv.slice(2);
console.log('myArgs', myArgs);
exports.employeeName = myArgs[0];
console.log(exports.employeeName);

const port = process.env.PORT || 3000;
const server = http.createServer(app);

app.get('/', (req, res, next) =>
  res.send('Justin Little here. Welcome to my Junior Dev Test for BetterCloud!'));

//// TODO: Refactor this into routes/index.js
const employeeRoute = require('./api/routes/employees');
const deleteEmployeeRoute = require('./api/routes/deleteEmployee');

app.use('/api/v1/employees', employeeRoute);
app.use('/api/v1/delete', deleteEmployeeRoute);
////

server.listen(port, function(){
  console.log("Server is listening on port 3000.");
});

const db_config = require('./config/db.config.js')

mongoose.Promise = global.Promise;
mongoose.connect(db_config.url);
mongoose.connection.on('error', function() {
  console.log('Error connecting to database.');
  process.exit();
});
mongoose.connection.once('open', function() {
  console.log("Successfully connected to database.");
});


////////Test
const request = require('request');

//Retrieve all users
request.get('http://localhost:3000/api/v1/employees/',
  { json: true },
  (err, res, body) => {
      if (err) { return console.log(err); }
      console.log('List of Users:')
      console.log(res.body);
});

//Find & retrieve a given user
const getEmployeeUrl = 'http://localhost:3000/api/v1/employees/' + exports.employeeName + '/';
request.get(
{ url: getEmployeeUrl },
function (err, res, body) {
  if (err) { return console.log(err); }
  console.log('Returned EmployeeID:');
  exports.returnedEmployeeId = JSON.parse(res.body);
  console.log(exports.returnedEmployeeId);
  const deleteEmployeeUrl = 'http://localhost:3000/api/v1/delete/' + exports.returnedEmployeeId + '/';
  console.log(deleteEmployeeUrl);
  request.delete(
    { url: deleteEmployeeUrl },
    function (err, res, body) {
      if (err) { return console.log(err); }
      console.log('Tests complete.');
    });
});



module.exports = app;
