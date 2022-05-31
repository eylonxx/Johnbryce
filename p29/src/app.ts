import express from 'express';
import controller from './6-controllers/products-controller';
import catchAll from './3-middleware/catch-all';

const server = express();

server.use(express.json());
server.use('/api', controller);
server.use(catchAll);

server.listen(3006, () => console.log('serving on port 3006!'));
