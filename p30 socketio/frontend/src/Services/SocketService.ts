import { io, Socket } from 'socket.io-client';
import MessageModel from '../Models/messageModel';

class SocketService {
  private socket: Socket;
  public connect(): void {
    this.socket = io('http://localhost:3001');
    console.log('connected');

    this.socket.on('msg', (msgObj) => {
      console.log(`got a message, ${msgObj}`);
    });
  }
  public send(msgObj: MessageModel): void {
    this.socket.emit('msg', msgObj);
  }
  public disconnect(): void {
    this.socket.disconnect();
  }
}
const socketService = new SocketService();
export default socketService;
