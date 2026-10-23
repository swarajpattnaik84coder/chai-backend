import mongoose, {Schema} from "mongoose";
import { Videos } from "./video.model";

const commentSchema = new mongoose.Schema({
    
    content:{
        type: String,
        required: true,
        trim: true
    },

    owner:{
        type: mongoose.Types.ObjectId,
        ref: "Uder",
        required: true,

    },
   
    targetType:{
        type: String,
        required: true,
        enum : ["Videos", "Tweets"]
    },

    targetId:{
        type: mongoose.Types.ObjectId,
        required: true,
        refPath: targetId
    }

},
{
    timestamps: true
})

const Comments = mongoose.model("Comments", commentSchema)
export{ Comments }