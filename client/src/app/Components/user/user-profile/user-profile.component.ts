import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'services/session';
import { WorksService } from 'services/works';
import { UserService } from 'services/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
user;
workIds:Array<any>;

  constructor( public sessionService: SessionService, public wS: WorksService,
    private aR: ActivatedRoute,
    private router: Router,
  public uS : UserService) { 
      
    }

  ngOnInit() {
    this.sessionService.isLogged().subscribe(user => {
      this.user = user;
    this.wS.get(this.user._id).subscribe(user=>{
      this.user = user;
      // console.log(user)
    })
    
  });
}
  
  deleteWork(id){
      this.wS.remove(id).subscribe(user=>{
        this.sessionService.isLogged().subscribe(user => {
          this.user = user;
        this.wS.get(this.user._id).subscribe(user=>{
          this.user = user;
          // console.log(user)
        })
        
      });
      })
  }
}
