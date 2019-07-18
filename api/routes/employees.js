const router = require('express').Router();
const controller = require('../controllers/controller');

console.log(exports.employeeName);

router.post('/', controller.createEmployee);
router.get('/', controller.getEmployees);
router.get('/:name', controller.getEmployee);

module.exports = router;
