import { Component } from '@angular/core';
import { SocketService } from './socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-client';
  messageContent: any;
  messages: string[] = [];

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.socketService.getMessages().subscribe((message: string) => {
      this.messages.push(message);
    });
  }

  sendMessage() {
    this.socketService.sendMessage(this.messageContent);
    this.messageContent = '';
  }
}

