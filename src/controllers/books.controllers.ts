import { Request,Response } from "express";
import { findMany, insertUnique} from "../repositories/book.repository.js";
import {Book, BookEntity } from "../protocols/book.js";
// const jobs: (number | string | boolean)[] = ['Tech', false, 5];
// const bolinha: string = "Gui";

// const jober : {
//     id:number,
//     title:string,
//     skills: (string | number)[],
//     salary: number
// } = {
//     id:1,
//     title:"oi",
//     skills:['olá', 1],
//     salary:5
// }

// const jober: {
//     id:number,
//     title:string,
//     skills: (string | number)[],
//     salary: number,
// }[] = [
//     {
//         id:1,
//         title:"oi",
//         skills:['olá', 1],
//         salary:5
//     },
//     {
//         id:1,
//         title:"oi",
//         skills:['olá', 1],
//         salary:5
// }];
import { BookSchema } from "../schemas/book.schema.js";


const nome: number = 1;



async function insert(req:Request, res:Response){
    const newJob = req.body as Book;

    const {error} = BookSchema.validate(newJob);
    if(error){
        return res.status(400).send({
            message:error.message
        })
    }

    const resultado = await insertUnique(newJob);
    
    return res.send(resultado)
}

async function listAllBooks(req:Request, res:Response){
    const resultado = await findMany();

    return res.send(resultado.rows)
}
export {
    listAllBooks,
    insert
}