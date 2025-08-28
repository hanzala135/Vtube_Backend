const mongoose = require("mongoose");
const Video  = mongoose.Schema({
   owner:{
    type:mongoose.Schema.Types.ObjectId,    
    ref:"User",
   },

    videoFile:{
     type:String,
     required:true,
    },
    thumbnail:{
     type:String,
     required:true,
    },
    title:{
     type:String,
     required:true,
    },
    description:{
     type:String,
     required:true,
    },
    duration:{
     type:Number,
     required:true,
    },
    views:{
     type:Number,
     default:0,
    },

    isPublished:{
     type:Boolean,
     default:false,
    }




},{timestamps:true});
 const Video_model = mongoose.model("Video",Video);
 module.exports = Video_model;


