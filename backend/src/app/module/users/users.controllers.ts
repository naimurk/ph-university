import { Request, Response } from "express"
import { UserService } from "./users.service"


const createStudent = async(req:Request, res:Response)=> {
    try {
        const { password, student:studentData} = req.body
          const result = await UserService.createStudentIntoDb(password, studentData)
          res.status(200).json({
            status: true , 
            message: "success",
            data: result
          })
    } catch (error) {
        res.status(400).json({
            status: false , 
            message: "success not",
            error: error
        
          })
    }

}









export  const UsersController = {
    createStudent
}