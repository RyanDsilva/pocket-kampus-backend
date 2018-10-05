var mongoose=require('mongoose');

var lectureSchema=new mongoose.Schema({
    description:String,
    date:String,
    time:String
});

module.exports=mongoose.model("Lecture",lectureSchema);