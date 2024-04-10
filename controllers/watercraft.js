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
res.render('watercraft', { title: 'thewatercraft Search Results', results: watercraft });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

// Handle watercraft create on POST.
exports.watercraft_create_post = async function(req, res) {
    console.log(req.body)
    let document = new watercraft();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"watercraft_type":"goat", "cost":12, "size":"large"}
    document.watercraft_type = req.body.watercraft_type;
    document.length = req.body.length;
    document.maximum_capaciy = req.body.maximum_capaciy;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

// for a specific watercraft.
exports.watercraft_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await watercraft.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};

// Handle watercraft update form on PUT.
exports.watercraft_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await watercraft.findById( req.params.id)
// Do updates of properties
if(req.body.watercraft_type)
toUpdate.watercraft_type = req.body.watercraft_type;
if(req.body.length) toUpdate.length = req.body.length;
if(req.body.maximum_capacity) toUpdate.maximum_capacity = req.body.maximum_capacity;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
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
    