import express from 'express';
import controller from './6-controllers/games-controller';

const server = express();

server.use(express.json());

server.use('/', controller);

server.listen(3001, () => {
  console.log('serving on port 3001!');
});
