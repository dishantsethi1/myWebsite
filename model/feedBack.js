const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    
    
    description:{
        type:String,
        required:true
    }
})

const Feed=mongoose.model('Feedbacks',userSchema);

module.exports=Feed;