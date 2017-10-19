const express= require ("express");
const bodyParser = require("body-parser");

const port =8000;
let app =express();

let productRoutes =require("./routes/product.js");

//pueda hacer peticiones desde dorimlarios de html
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/products', productRoutes);



//para el mongo como no es una ruta nos se pone con app.use
let mongo= require("./config/db.js");


app.listen(port, function(err, res){
    if(err){
        console.log(err);
        return;
    }else{
        console.log(`Listenning on ${port}`);
    }
})