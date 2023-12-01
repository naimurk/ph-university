import { Schema, model } from "mongoose";
import { TUser } from "./users.interface";

import { Timestamp } from "mongodb";



export const userSchema = new Schema<TUser>({
    id: {type: String , required: true},
    isDelete: {type: Boolean, required:true , default: false},
    needsPasswordChange: {type: Boolean, required:true, default: true},
    password: {type: String, required:true},
    role: {
        type:String,
        enum: {
            values: ["admin", "student", "faculty"]
        },
        required: true,
        
        
    
    },
    status: {
        type:String,
        enum: {
            values: ["in-progress" , "blocked"]
        },
        required: true,
        default: "in-progress"
    },
    

},{timestamps: true})

 export const User = model <TUser>("User", userSchema)