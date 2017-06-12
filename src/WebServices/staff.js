
var router=require('express').Router();

var staffModel=require('../collections/staff');


router.get("/",function(request,response){
      staffModel.find({}).then(_result=> response.json(_result));
});


// router.post("/",function(request,response){
//       var _tickets=new ticketsModel(request.body);
//       _tickets.save();
// });


module.exports=router;