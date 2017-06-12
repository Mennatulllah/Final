var router=require('express').Router();

var feedbackModel=require('../collections/feedback');

// any url will start with /roles
router.get("/",function(request,respone){
    feedbackModel.find({}).populate({
        path:'feedbackType'
    }).then(_result=>respone.json(_result));
});

router.post("/",function(request,respone){
    var _feedback=new feedbackModel(request.body);
    _feedback.save();
})

module.exports=router;