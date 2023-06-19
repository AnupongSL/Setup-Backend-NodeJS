const router = require('express').Router();

//router.use('/example',require('./example.route'))
router.use('/employee',require('./employee.route'))
router.use('/hr',require('./hr.route'))
router.use('/work_history',require('./work_history.route'))

module.exports = router 