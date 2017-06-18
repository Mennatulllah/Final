var mongoose = require('mongoose');
var schema = mongoose.Schema;

var ticketSchema = new schema({
    Title:{
        type:String,
        required:true
    },

    Price:{
        type:Number,
        required:true
    },

    zoo:{
        type:schema.Types.ObjectId,
        ref:'Zoo',
        required:true
    }
})

module.exports=mongoose.model('Ticket',ticketSchema)