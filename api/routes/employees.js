const router = require('express').Router();
const employeeController = require('../controllers/employee');

console.log(exports.employeeName);

router.post('/', employeeController.createEmployee);
router.get('/', employeeController.getEmployees);
router.get('/:name', employeeController.getEmployee);

module.exports = router;
