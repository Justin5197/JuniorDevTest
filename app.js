const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require('./db');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

var myArgs = process.argv.slice(2);
console.log('myArgs', myArgs);
var empName = myArgs[0];

app.get('/', (req, res, next) =>
  res.send('Justin Little here. Welcome to my Junior Dev Test for BetterCloud!'));

const employeeRoute = require('./api/routes/employees');
const deleteEmployeeRoute = require('./api/routes/deleteEmployee');

app.use('/api/v1/employees', employeeRoute);
app.use('/api/v1/delete', deleteEmployeeRoute);

//const test = require('./test');

module.exports = app;
