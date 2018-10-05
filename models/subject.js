var mongoose=require('mongoose');

var subjectSchema=new mongoose.Schema({
    name:String,
    teacher:String,
    lecture:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Lecture" 
        }
    ],
    resources:[]
});

module.exports=mongoose.model("Subject",subjectSchema);