export type BookEntity = {
    id:number,
    title:string,
    price: number,
}

export type Book = Omit<BookEntity, "id">

export type NewBook = Partial<BookEntity>