import express from 'express';
import { listAllBooks, insert } from './controllers/jobs.controllers.js';
var server = express();
server.use(express.json());
server.get('/health', function (req, res) {
    res.send('ok');
});
server.get('/jobs', listAllBooks);
server.post('/jobs', insert);
server.listen(4000, function () {
    console.log('Tá executando...');
});
