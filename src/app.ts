import express from 'express';
import { listAllBooks, insert} from './controllers/jobs.controllers.js';
const server = express();
server.use(express.json());


server.get('/books', listAllBooks);
server.post('/books', insert);

server.listen(4000, () => {
  console.log('Tá executando...');
})

