var mongoose = require('mongoose');
var schema = mongoose.Schema;

var ComponentSchema = new schema({
    Title: {
        type: String,
        required:true
    },
    Description: {
        type: String,
        required:true
    },
    
    zoo:{
        type:schema.Types.ObjectId,
        ref:'Zoo'
    },
    compType:{
        type:schema.Types.ObjectId,
        ref:'Component_Type'
    }
})

module.exports = mongoose.model('Component', ComponentSchema)