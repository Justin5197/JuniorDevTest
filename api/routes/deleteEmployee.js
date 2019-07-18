const router = require('express').Router();
const controller = require('../controllers/controller');

router.delete('/:employeeId', controller.deleteEmployee);

module.exports = router;
