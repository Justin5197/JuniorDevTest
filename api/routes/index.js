const router = require('express').Router();

const employeeRoute = require('./employees');
const deleteEmployeeRoute = require('./deleteEmployee');

router.use('/employees', employeeRoute);
router.use('/delete', deleteEmployeeRoute);

module.exports = router;
