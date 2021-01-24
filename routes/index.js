//Requerimientos
const mainController = require('../controllers/mainController');
var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
///////////////////////

router.get('/', mainController.index);


router.get('/productDetails', function(req, res, next) {
  res.render('productDetails');
});

router.get('/productCart', function(req, res, next) {
  res.render('productCart');
});

module.exports = router;

