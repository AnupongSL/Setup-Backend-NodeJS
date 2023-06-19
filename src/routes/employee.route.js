const router = require('express').Router();
const employeeController = require("../controllers/employee.controller")
const jwt = require('../middleware/jwt')

router.get('/getemployee',employeeController.getEmployeeAll)
router.post('/registeremployee',jwt.verifyToken, employeeController.addEmployee)
router.post('/loginemployee',employeeController.loginEmployee)

module.exports = router