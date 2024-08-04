import { NextFunction, Request, Response } from "express";

type handlerType = (req:Request,res:Response,next:NextFunction) => Promise<any>;


const asyncHandler = (handler:handlerType) => async (req:Request,res:Response,next:NextFunction):Promise<any> => {
    try {
        return await handler(req,res,next);
    } catch (err) {
        next(err);
    }
}

export default asyncHandler;