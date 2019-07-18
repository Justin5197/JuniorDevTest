const express = require('express');
const mongoose = require('mongoose');

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
exports.getEmployees = function(req, res, next) {
  Employee.find()
    .populate('_id', 'name')
    .exec()
    .then(employees => {
      res.status(200).json({
        count: employees.length,
        list: employees.map(employee => {
          var employeeId = employee._id._id;
          return {
            _id: employeeId,
            name: employee.name
          };
        })
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
  });
};

//Fetches employee based on name
exports.getEmployee = function(req, res, next) {
  Employee.find({name: process.argv[2]})
    .populate('_id', 'name')
    .exec()
    .then(employees => {
      if (!employees) {
        return res.status(404).json({
          message: "Employee not found."
        });
      }
      res.status(200).json({
        list: employees.map(employee => {
          var employeeId = employee._id._id;
          const retrievedEmployeeId = employeeId;
          console.log(employeeId);
          return {
            _id: employeeId,
            name: employee.name
          };
        })
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
  });
}

//Finds and deletes an employee
exports.deleteEmployee = function(req, res) {
  Employee.remove({_id: req.params.employeeId})
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Employee deleted successfully."
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
}
