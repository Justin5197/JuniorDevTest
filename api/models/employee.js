const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  _id : mongoose.Schema.Types.ObjectId,
  name : {
    type: String,
    required: true
  }
});

var Employee = module.exports = mongoose.model('Employee', EmployeeSchema);

module.exports.get = function (callback, limit) {
  Employee.find(callback).limit(limit);
}
