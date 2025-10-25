import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
    title:{type:String, required:true},
    content:{type:String, required:true},
    tags:[{type:String}],
    status:{type:String,enum:["draft", "published"],default:"draft"},
    author:{type:mongoose.Schema.Types.ObjectId,red:"User", required:true},
},{timestamps:true});

export default mongoose.model("Post",postSchema);