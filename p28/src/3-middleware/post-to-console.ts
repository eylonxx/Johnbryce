import { NextFunction, Request, Response } from "express";

async function consoleLogPost(request: Request, response: Response, next: NextFunction) {

    console.log("POST Request:");
    console.log(request.body);

    next();
}

export default consoleLogPost;