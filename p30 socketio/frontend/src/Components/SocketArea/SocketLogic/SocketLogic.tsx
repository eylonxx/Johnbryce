import React from 'react';
import MessageModel from '../../../Models/messageModel';
import socketService from '../../../Services/SocketService';

export default function SocketLogic() {
  function connect(): void {
    socketService.connect();
  }
  function send(): void {
    const msgObj: MessageModel = { title: 'lol', text: 'xd' };
    socketService.send(msgObj);
  }

  function disconnect(): void {
    console.log('disconnected!');
    socketService.disconnect();
  }
  return (
    <div>
      SocketLogic
      <button onClick={connect}>connect</button>
      <button onClick={send}>sendMessage</button>
      <button onClick={disconnect}>disconnect!</button>
    </div>
  );
}
