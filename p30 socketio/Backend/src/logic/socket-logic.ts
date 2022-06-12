import { Server as HttpServer } from 'http';
import { disconnect } from 'process';
import { Server as SocketServer, Socket } from 'socket.io';
import MessageModel from '../models/message-model';

function listen(httpServer: HttpServer): void {
  const socketServer = new SocketServer(httpServer, { cors: { origin: '*' } });
  socketServer.sockets.on('connection', (socket: Socket) => {
    console.log('client connected');

    socket.on('msg', (msgObj: MessageModel) => {
      console.log(`client: ${msgObj.title}, ${msgObj.text}`);
    });
    const timerId = setInterval(() => {
      socket.emit('msg', Math.random());
    }, 5000);

    socket.on('disconnect', () => {
      console.log('client has been disconnected');
      clearInterval(timerId);
    });
  });
}

export default { listen };
