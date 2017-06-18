var router=require('express').Router();

var animalMarker=require('../collections/animalType');

// any url will start with /roles
router.get("/",function(request,respone){
    animalMarker.find({},{"location" : 1}).then(_result=>respone.json(_result));
});

module.exports=router;