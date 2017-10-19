const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/products', {useMongoClient: true});

var db = mongoose.connection;

db.on('error', function(){
    console.log("error al tratar de conenctar con mongo");
})

db.once('open', function(err){
    if(err){
        console.log('error');
        return;
    }

    console.log("connected succesfully with mongo :3");
})