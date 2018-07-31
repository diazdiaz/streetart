import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { SessionService } from '../../../services/session';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  constructor(private sessionService:SessionService) { }

  ngOnInit() {
  }

  login(){
    console.log("login....");
    this.sessionService.login(this.username,this.password).subscribe( user => {
      console.log(user);
    });
  }

}
