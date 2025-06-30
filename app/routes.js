const express = require('express');
const router = express.Router();
const controller = require('./controllers/eventController');

router.get('/balance', controller.getBalance);
router.post('/event', controller.handleEvent);
router.post('/reset', controller.reset); 

module.exports = router;