var mongoose=require('mongoose');

var eventSchema =new mongoose.Schema({
    type:String,
    name:String,
    description:String,
    date:String,
    eventImage:String,
    hostCouncil:String

});

module.exports=mongoose.model("")