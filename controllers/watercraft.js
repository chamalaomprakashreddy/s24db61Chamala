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

// // Handle watercraft create on POST.
// exports.watercraft_create_post = async function(req, res) {
//     console.log(req.body)
//     let document = new watercraft();
//     // We are looking for a body, since POST does not have query parameters.
//     // Even though bodies can be in many different formats, we will be picky
//     // and require that it be a json object
//     // {"watercraft_type":"goat", "cost":12, "size":"large"}
//     document.watercraft_type = req.body.watercraft_type;
//     document.length = req.body.length;
//     document.maximum_capaciy = req.body.maximum_capaciy;
//     try{
//     let result = await document.save();
//     res.send(result);
//     }
//     catch(err){
//     res.status(500);
//     res.send(`{"error": ${err}}`);
//     }
//     };
    