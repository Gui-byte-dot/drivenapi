import express from 'express';
import { listAllBooks, insert} from './controllers/books.controllers.js';
const server = express();
server.use(express.json());


server.get('/books', listAllBooks);
server.post('/books', insert);

server.listen(4000, () => {
  console.log('Tá executando...');
})

