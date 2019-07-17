const router = require('express').Router();
const deleteEmployeeController = require('../controllers/deleteEmployee');

router.delete('/:employeeId', deleteEmployeeController.deleteEmployee);

module.exports = router;
