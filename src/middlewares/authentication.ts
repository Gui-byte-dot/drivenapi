import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

export default async function authentication(req: Request, res:Response, next: NextFunction){
    const authorization = req.header("Authorization");
    //Test Case 1: Não tem authorization
    if(!authentication){
        return res.sendStatus(401);
    }
    try{
        const token = authorization.replace('Bearer ', '');
        //Test Case 2: Token não é válido
        jwt.verify(token, 'secret');
        //Test case 3: sucesso
        return next();

    }catch(err){
        return res.sendStatus(401);
    }
}