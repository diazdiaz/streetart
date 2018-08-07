import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../../services/session';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  username:any;
  password:any;
  artist:any;
  error:any;

  constructor(private sessionService:SessionService, private router:Router) { }

  ngOnInit() {
  }

  signup(username:string, password:string, artist:boolean){
    console.log("signup....");
    if(artist == undefined)artist = false;

    this.sessionService.signup(username,password,artist).subscribe( (user:any) =>{
      console.log(`WELCOME USER ${user.username}, register OK`);
      console.log(user);
      this.router.navigate(['/login']);
    });
  }
}