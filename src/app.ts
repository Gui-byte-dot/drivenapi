import express from 'express';
import { listAllJobs, insert} from './controllers/job.controllers';
import authentication from './middlewares/authentication';
const server = express();
server.use(express.json());


server.get('/jobs',authentication, listAllJobs);
server.post('/jobs', insert);

server.listen(4000, () => {
  console.log('Tá executando...');
})

export default server;