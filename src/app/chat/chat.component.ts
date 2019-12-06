import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';
import { Chat } from '../chat';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  chats: Chat[]
  currentChat: any
  currentUser: any;


  constructor(private msg: MessagesService, private router: Router) {}
  
  ngOnInit() {
  this.currentChat=localStorage.getItem("Chat");
  this.currentUser=localStorage.getItem("User");

  if (!this.msg) {
        this.router.navigate(['/']);
     } else {
          this.msg.getChat().subscribe(
            (chats: Chat[]) => this.chats = chats
          )
        }
    }

    goTo(){
      localStorage.setItem("Chat", this.currentChat)
    }

    sendMessage(content: string){
        this.currentChat.text= content

    }
 

}
