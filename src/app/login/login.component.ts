import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = ""
  constructor(private msg: MessagesService, private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    this.msg.currentUser = this.username
    this.router.navigate(['/chat']);
  }



}
