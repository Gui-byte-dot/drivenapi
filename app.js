import express from 'express';

const server = express();

server.get('/health', (req,res) => {
  res.send('ok')
})
server.get('/calculator', convertCLTToPJ)
server.listen(4000, () => {
  console.log('Tá executando...');
})

