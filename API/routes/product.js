const route= require("express").Router(); //como es una nueva instancia le ponemos los parentesis
const Product= require("../Models/Products");

route.get('/', function(req, res){
   // res.status(200).send("Hola mundo");7
   Product.find({}, function(err, products){
       if(err){
           console.log(err);
           return;
       }
       res.status(200).send(products);
   })


})

route.get('/:id', function(req, res){
    Product.findById(req.params.id, function(err, product){
        if(err){
            console.log("Error"+err);
            return;
        }
        res.status(200).send(product);
    } );
});

route.post('/', function(req, res){
    
    let product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        provider: req.body.provider,
        img: req.body.img,

    })

    product.save(function(err, product){
        if(err){
            console.log("Error "+err);
        }
        res.status(202).send(product);
    })
})
//modificar uno
route.put('/:id', function(req, res){
    //res.status(200).put("haciendo put");
    Product.findByIdAndUpdate(req.params.id, 
        {
            name: req.body.name,
            description: req.body.name,
            price: req.body.price,
            provider: req.body.provider,
            img: req.body.img,
        },
        function(err, product){
            if(err){
                console.log("ERROR "+err);
                return;
            }
            res.status(200).send(product);

    })


})

//borrar
route.delete('/:id', function(req, res){
    //res.status(200).delete(1);
    Product.findByIdAndRemove(req.params.id, function(err, product){
        if(err){
            console.log("Error ----> "+err);
            return;
        }
        res.status(200).send(product);

    })


})

module.exports= route; //exporta toda la funcion route
