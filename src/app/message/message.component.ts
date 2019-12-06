import { Component, OnInit } from '@angular/core';
import { Message } from "../message";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent{

 Message: Message

}
