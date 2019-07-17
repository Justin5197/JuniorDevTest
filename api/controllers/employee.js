const express = require('express');
const mongoose = require('mongoose');

const employeeName = exports.employeeName;

Employee = require('../models/employee');

//Creates new employee
exports.createEmployee = function(req, res) {
  if (!req.body.name) {
    res.status(400).send({message: "Must pass atleast an employee name in order to create an Employee!"});
  }

  var employee = new Employee({
    name: req.body.name,
    _id: new mongoose.Types.ObjectId(),
  });

  employee
    .save(function(err, data) {
      if (err) {
        console.log(err);
        res.status(500).send({message: "An error occurred creating an employee."});
      } else {
        res.send(data);
      }
  });
};

//Fetches all employees
exports.getEmployees = function(req, res) {
  Employee.find(function(err, employees) {
    if(err) {
      res.status(500).send({message: "Error fetching all employees."});
    } else {
      res.send(employees);
    }
  });
};

//Fetches employee based on name
exports.getEmployee = function(req, res) {
  Employee.find({name: req.params.name}, function(err, data) {
      if (err) {
        console.log(err)
        res.status(500).send({message: "Couldn't find an employee with the name: " + req.params.name});
        return;
      } else {
        var data = data[0]._id;
        var jsonData = JSON.parse(data);
        var employeeId = mongoose.Types.ObjectId(jsonData);
        console.log(employeeId);
        res.send(employeeId);
      }
  });
};
