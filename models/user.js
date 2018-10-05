var mongoose=require('mongoose');

var userSchema=new mongoose.Schema({
    username:String,
    uImage:String,
    email:String,
    password:String,
    name:String,
    collegeName:String,
    year:String,
    branch:String,
    isAdmin:Boolean,
    reminders:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Reminder" 
        }
    ],
    subjects:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Subject" 
        } 
    ],
    attendanceCriteria:Number,
    attendance:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Lecture" 
        }
    ],
    preferences:[]
});

module.exports=mongoose.model("User",userSchema);