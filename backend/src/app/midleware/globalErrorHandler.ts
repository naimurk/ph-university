/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from "express";

 export const globalErrorHandler = (err: any , req:Request , res:Response, next : NextFunction)=> {
    return res.status(500).json({
        status : 500,
        message: "some error occurred",
        error: err
      })
}
