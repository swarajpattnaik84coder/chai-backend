import { ApiError } from "../utils/apiError";
import { asyncHandler } from "../utils/asyncHandlers";
import {User} from "../models/user.model"
import { Tweets } from "../models/tweets.model";
import { ApiResponse } from "../utils/ApiResponse";

const createTweet = asyncHandler( async(req,res)=>{
    const {content} = req.body;

    if(!content.trim()){
        throw new ApiError(400,"tweet content can't be empty")
    }

    const tweet = Tweets.create({
        content: content.trim(),
        owner: req.body?._id
    });

    if(!tweet){
        throw new ApiError(500,"something went wrong in tweet creation")
    }

    return res
    .status(200)
    .json(
        new ApiResponse(201,tweet,"tweet created successfully")
    )

})