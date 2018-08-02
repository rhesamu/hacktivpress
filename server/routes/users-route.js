var express = require('express');
var router = express.Router();
const usersController = require('../controllers/users-controller')

/* GET users listing. */
router.get('/:id', usersController.getById)

module.exports = router;
