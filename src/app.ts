import express from 'express';
import { listAllBooks, insert} from './controllers/book.controllers';
import authentication from './middlewares/authentication';
const server = express();
server.use(express.json());


server.get('/jobs',authentication, listAllBooks);
server.post('/jobs', insert);

server.listen(4000, () => {
  console.log('Tá executando...');
})

export default server;