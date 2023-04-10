import { QueryResult } from "pg";
import { Book, BookEntity } from "../protocols/book.js";
import connection from "../database/database.js";




async function findMany(): Promise<QueryResult<BookEntity>>{
    return  connection.query("SELECT * FROM info")
}
async function insertUnique(book: Book): Promise<QueryResult<BookEntity>> {
   return connection.query(`
    INSERT INTO info(title, price) VALUES ($1,$2);
   `,[book.title, book.price])
}

export {
    findMany,
    insertUnique
}