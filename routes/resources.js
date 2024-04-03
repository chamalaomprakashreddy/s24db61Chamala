var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var watercraft_controller = require('../controllers/watercraft');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// watercraft ROUTES ///
// POST request for creating a watercraft.
router.post('/watercraft', watercraft_controller.watercraft_create_post);
// DELETE request to delete watercraft.
router.delete('/watercraft/:id', watercraft_controller.watercraft_delete);
// PUT request to update watercraft.
router.put('/watercraft/:id', watercraft_controller.watercraft_update_put);
// GET request for one watercraft.
router.get('/watercraft/:id', watercraft_controller.watercraft_detail);
// GET request for list of all watercraft items.
router.get('/watercraft', watercraft_controller.watercraft_list);
module.exports = router;