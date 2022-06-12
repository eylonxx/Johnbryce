import express from 'express';
import cors from 'cors';
import socketLogic from './logic/socket-logic';

const expressServer = express();
expressServer.use(cors());

const httpServer = expressServer.listen(3001, () => console.log('listening on port 3001..'));

socketLogic.listen(httpServer);
