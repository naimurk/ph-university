import { UserService } from "./users.service";
import { response } from "../../utils/response";
import { catchAsync } from "../../utils/catchAsync";
import { AnyZodObject } from "zod";
import { NextFunction, Request, Response } from "express";




// validation request
const validateRequet = (Schema: AnyZodObject)=> {
  return async (req:Request, res:Response , next: NextFunction)=> {
        try {
          await Schema.parseAsync({
            body: req.body,
          });
        } catch (error) {
          next(error)
        }
  }
}



const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;
  const result = await UserService.createStudentIntoDb(password, studentData);
  response(res, {
    data: result,
    message: "success",
    status: true,
    statusCode: 200,
  });
});

export const UsersController = {
  createStudent,
};
