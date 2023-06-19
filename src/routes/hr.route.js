const router = require('express').Router();
const hrController = require("../controllers/hr.controller")

router.post('/registerhr',hrController.addHr)
router.post('/loginhr',hrController.loginHr)

module.exports = router