const express = require('express');
const mongoose = require('mongoose');

Employee = require('../models/employee');

//Finds and deletes an employee
exports.deleteEmployee = function(req, res) {
  Employee.remove({_id: req.params.employeeId}, function(err, data) {
    if (err) {
      res.status(500).send({message: "Couldn't delete employee with id: " + req.params.id});
    } else {
      res.status(200).send({message: "Employee deleted successfully."});
    }
  })
}
