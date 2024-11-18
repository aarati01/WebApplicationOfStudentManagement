var mongoose =require ('mongosh');
var studentSchema= new mongoose.Schema({
    id:{type:Number},
    f_name:{type:String},
    l_name:{type:String},
    semester:{type:String},
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],


});
module.exports = mongoose.model("Student", studentSchema);
