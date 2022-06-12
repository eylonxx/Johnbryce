import { io, Socket } from 'socket.io-client';
import MessageModel from '../Models/messageModel';

class SocketService {
  private socket: Socket;
  public connect(callback: Function): void {
    this.socket = io('http://localhost:3001');

    this.socket.on('msg', (msgObj) => {
      console.log(`got a message, ${msgObj}`);
    });
  }
  public send(msgObj: MessageModel): void {
    this.socket.emit('msg', msgObj);
  }
  public disconnect(): void {
    this.socket.emit('disconnect');
  }
}
const socketService = new SocketService();
export default socketService;
