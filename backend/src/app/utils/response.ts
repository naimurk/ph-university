import { Response } from "express";


type TResponse <T> =  {
    status: true,
    message: string,
    statusCode : number,
    data: T

}

export const response = <T>(res: Response, data:TResponse<T>)=> {
    return res.status(data.statusCode).json({
      message: data.message,
      status: data.status,
      data: data.data
    })
}