import mongoose, {Schema} from 'mongoose'

const videoSchema = new Schema({
    videoFile:{
        type: String, // url from cloudynary
        required: true
    },
    thumbnail:{
        type: String, // url from cloudynary
        required: true
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User", 
        required: true
    },
    title:{
        type: String,
        required: true
    },
     description:{
        type: String, 
        required: true
    },
    duration:{
        type: String, // url from cloudynary
        required: true
    },
    views:{
        type: Number, // url from cloudynary
        required: true,
        default: 0
    },
    isPublished:{
        type: Boolean,
        required: true,
        default: true
    },
    
},{timestamps: true})