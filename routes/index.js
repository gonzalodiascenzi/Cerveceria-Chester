var express = require('express');
var router = express.Router();

// Vista de homepage

router.get('/', mainController.index);

module.exports = router;
