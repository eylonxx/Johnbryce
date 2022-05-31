import express from 'express';
import controller from './6-controllers/products-controller';
import catchAll from './3-middleware/catch-all';
import { RouteNotFoundError } from './4-models/errors-model';

const server = express();

server.use(express.json());
server.use('/api', controller);

//route not found
server.use('*', (req, res, next) => {
  const err = new RouteNotFoundError(req.method, req.originalUrl);
  next(err);
});

server.use(catchAll);

server.listen(3006, () => console.log('serving on port 3006!'));
