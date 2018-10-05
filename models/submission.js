var mongoose=require('mongoose');

var submissionSchema=new mongoose.Schema({
    title:String,
    subject:String,
    dueDate:String,
    completed:Boolean,
    description:String
});

module.exports=mongoose.model("Submission",submissionSchema);