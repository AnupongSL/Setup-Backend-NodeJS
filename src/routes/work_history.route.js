const router = require('express').Router();
const workHistoryController = require("../controllers/work_history.controller")
const jwt = require('../middleware/jwt')

router.get('/getework_history',jwt.verifyToken, workHistoryController.getWorkHistoryAll)
router.post('/getwork_historybydate',jwt.verifyToken, workHistoryController.getWorkHistoryByDate)
router.post('/getwork_historybyname',jwt.verifyToken, workHistoryController.getWorkHistoryByName)

router.get('/getwork_historybyusername',jwt.verifyToken, workHistoryController.getWorkHistoryByUsername)
router.post('/getwork_historybyusernameanddate',jwt.verifyToken, workHistoryController.getWorkHistoryByUsernameAndDate)
router.post('/addcheckin',jwt.verifyToken, workHistoryController.addCheckIn)
router.post('/addcheckout',jwt.verifyToken, workHistoryController.addCheckOut)

module.exports = router