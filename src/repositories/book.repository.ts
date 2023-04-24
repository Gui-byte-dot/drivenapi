import { QueryResult } from "pg";
import { Book, BookEntity, NewBook } from "../protocols/book";
import prisma from "../database/database";


async function findMany(){
    return prisma.info.findMany();
    
}
async function insertUnique(book: Book) {
   return prisma.info.create({
     data:book
   })
}
async function upsert(book:NewBook){
  return prisma.info.upsert({
    where:{
      id:book.id || 0,
    },
    create:book as Book,
    update:book
  })
}

export {
    findMany,
    insertUnique,
    upsert
}