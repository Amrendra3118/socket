import { Injectable } from '@angular/core';
import   io  from 'socket.io-client';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;
   
  constructor() {
    this.socket = (io as any)('http://mfralphaapi.mediaferry.com');
  }

  public sendMessage(message: any) {
    this.socket.emit('chat', message);
  }
  public getMessages = () => {
    return Observable.create((observer: any) => {
      this.socket.on('apiCall', (message: any) => {
        observer.next(message);
      });
    });
  }
}