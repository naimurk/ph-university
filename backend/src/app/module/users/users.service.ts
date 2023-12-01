import config from "../../config"
import { TStudent } from "../students/student.interface"
import { Student } from "../students/students.model"
import { TUser } from "./users.interface"
import { User } from "./users.model"


const createStudentIntoDb = async (password :string,studentData : TStudent)=> {
    const userData : Partial <TUser> = {}
    
    userData.password = password || config.default_password as string
    userData.id= "23424afaercs"
    userData.role="student"
    const newUser = await User.create(userData)
    if(Object.keys(newUser).length){
        studentData.id= newUser.id
        studentData.user=newUser._id
        const newStudent = await Student.create(studentData)
        return newStudent
        
    }
}


export const UserService = {
    createStudentIntoDb
}