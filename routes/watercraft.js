var express = require('express');
var router = express.Router();
var passport = require('passport');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('watercraft', { title: 'Search Result watercraft' });
});

module.exports = router;

const watercraft_controlers= require('../controllers/watercraft');
var router = express.Router();
/* GET watercraft */
router.get('/', watercraft_controlers.watercraft_view_all_Page );
module.exports = router;

// GET request for one watercraft.
router.get('/watercraft/:id', watercraft_controlers.watercraft_detail);
const secured = (req, res, next) => {
  if (req.user){
  return next();
  }
  res.redirect("/login");
  }

/* GET detail watercraft page */
router.get('/detail',secured,watercraft_controlers.watercraft_view_one_Page);

/* GET create watercraft page */
router.get('/create', watercraft_controlers.watercraft_create_Page);

// /* GET create update page */
// router.get('/update', watercraft_controlers.watercraft_update_Page);

// /* GET delete watercraft page */
// router.get('/delete', watercraft_controlers.watercraft_delete_Page);

// A little function to check if we have an authorized user and continue on

// redirect to login

/* GET update watercraft page */
router.get('/update', secured,watercraft_controlers.watercraft_update_Page);
/* GET delete watercraft page */
router.get('/delete',secured, watercraft_controlers.watercraft_delete_Page);

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
  });
module.exports=router;