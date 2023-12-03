import { Schema, model } from "mongoose";
import { TUser } from "./users.interface";
import config from "../../config";
import bcrypt from "bcrypt"


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


userSchema.pre("save", async function (next){
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this;
    user.password = await bcrypt.hash(user.password , Number(config.BCRYPT_SALT_ROUNDS));
    next();
 
   })
 
   userSchema.post("save", async function (doc , next){
     doc.set("password", undefined);
    next()
   })
 
 

 export const User = model <TUser>("User", userSchema)