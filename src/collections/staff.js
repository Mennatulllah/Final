var mongoose = require('mongoose');
var schema = mongoose.Schema;

var StaffSchema = new schema({
    Name:{
        type:String,
        required:true,
        unique:true
    },
    Image:{
        type:String,
        required:true
    },
    Title:{
        type:String,
        required:true
    }
  
})

module.exports=mongoose.model('Staff',StaffSchema);
