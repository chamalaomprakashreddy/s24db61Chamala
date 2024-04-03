var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('watercraft', { title: 'Search Result watercraft' });
});

module.exports = router;

var express = require('express');
const watercraft_controlers= require('../controllers/watercraft');
var router = express.Router();
/* GET watercraft */
router.get('/', watercraft_controlers.watercraft_view_all_Page );
module.exports = router;