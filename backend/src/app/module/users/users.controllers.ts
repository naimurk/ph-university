
import { NextFunction, Request, Response } from "express"
import { UserService } from "./users.service"
import { response } from "../../utils/response"


const createStudent = async(req:Request, res:Response, next:NextFunction)=> {
    try {
        const { password, student:studentData} = req.body
          const result = await UserService.createStudentIntoDb(password, studentData)
        //   res.status(200).json({
        //     status: true , 
        //     message: "success",
        //     data: result
        //   })

        response(res, {
            data: result,
            message: "success",
            status: true,
            statusCode:200
        })
    } catch (error) {
        next(error)
    }

}









export  const UsersController = {
    createStudent
}