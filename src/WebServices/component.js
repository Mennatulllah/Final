var router=require('express').Router();

var componentModel=require('../collections/component');

// any url will start with /roles
router.get("/",function(request,respone){
    componentModel.find({},{__v:0})
    .populate({
        path:'zoo'
    })
    .populate({
        path:'compType'
    }).then(_result=>respone.json(_result));
});

router.post("/",function(request,respone){
    var _component=new componentModel(request.body);
    _component.save();
})


module.exports=router;