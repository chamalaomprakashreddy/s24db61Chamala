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

// Handle watercraft delete on DELETE.
exports.watercraft_delete = async function(req, res) {
console.log("delete " + req.params.id)
try {
result = await watercraft.findByIdAndDelete( req.params.id)
console.log("Removed " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": Error deleting ${err}}`);
}
};

// Handle a show one view with id specified by query
exports.watercraft_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await watercraft.findById( req.query.id)
    res.render('watercraftdetail',
    { title: 'watercraft Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle building the view for creating a watercraft.
// No body, no in path parameter, no query.
// Does not need to be async
exports.watercraft_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('watercraftcreate', { title: 'watercraft Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };


// Handle building the view for updating a watercraft.
// query provides the id
exports.watercraft_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await watercraft.findById(req.query.id)
    res.render('watercraftupdate', { title: 'watercraft Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };    

    // Handle a delete one view with id from query
exports.watercraft_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await watercraft.findById(req.query.id)
    res.render('watercraftdelete', { title: 'watercraft Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    