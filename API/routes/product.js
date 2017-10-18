const route= require("express").Router(); //como es una nueva instancia le ponemos los parentesis

route.get('/', function(req, res){
    res.status(200).send("Hola mundo");


})

route.post('/', function(req, res){
    res.status(200).post("probando mundo");
})

route.put('/', function(req, res){
    res.status(200).put("haciendo put");
})

route.delete('/', function(req, res){
    res.status(200).delete(1);
})

module.exports= route; //exporta toda la funcion route
