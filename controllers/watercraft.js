var watercraft = require('../models/watercraft');
// List of all watercrafts
exports.watercraft_list = function(req, res) {
res.send('NOT IMPLEMENTED: watercraft list');
};
// for a specific watercraft.
exports.watercraft_detail = function(req, res) {
res.send('NOT IMPLEMENTED: watercraft detail: ' + req.params.id);
};
// Handle watercraft create on POST.
exports.watercraft_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: watercraft create POST');
};
// Handle watercraft delete from on DELETE.
exports.watercraft_delete = function(req, res) {
res.send('NOT IMPLEMENTED: watercraft delete DELETE ' + req.params.id);
};
// Handle watercraft update form on PUT.
exports.watercraft_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: watercraft update PUT' + req.params.id);
};


// List of all watercrafts
exports.watercraft_list = async function(req, res) {
try{
    thewatercraft = await watercraft.find();
res.send(thewatercraft);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};



// VIEWS
// Handle a show all view
exports.watercraft_view_all_Page = async function(req, res) {
try{
thewatercraft = await watercraft.find();
res.render('watercraft', { title: 'watercraft Search Results', results: thewatercraft });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};