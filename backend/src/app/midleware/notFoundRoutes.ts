
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";

 export const notFoundRoutes = ( req:Request , res:Response, next : NextFunction)=> {
    return res.status(httpStatus.NOT_FOUND).json({
        status : 500,
        message: "not found routes",
        error: "not found"
      })
}
