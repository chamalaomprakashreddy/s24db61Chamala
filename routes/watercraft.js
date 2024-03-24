var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('watercraft', { title: 'Search Result watercraft' });
});

module.exports = router;