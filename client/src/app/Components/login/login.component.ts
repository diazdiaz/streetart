import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '../../../../node_modules/@angular/router';
import { SessionService } from '../../../../services/session';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  error:any;
  constructor(private sessionService:SessionService, private router:Router) { }

  ngOnInit() {
  }

  login(){
    
    console.log("login....");
    this.sessionService.login(this.username,this.password).subscribe(() => this.router.navigate(['/workslist'])
 )
}  
}   
  


