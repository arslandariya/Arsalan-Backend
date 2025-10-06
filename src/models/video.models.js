import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchema = new mongoose.Schema(
    {
        videoFile: {
            type: String, //cloudnary url
            require: true,

        },
        thumbnail: {
            type: String, //cloudnary url
            require: true,
        },
        description: {
            type: String,
            require: true,
        },
        duration: {
            type: Number,
            require: true,
        },
        view: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        Owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    }
    ,
    {
        timestamps: true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)