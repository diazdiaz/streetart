import { Component, OnInit } from '@angular/core';
import { SessionService } from 'services/session';
import { UserService } from 'services/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  artists:Array<object>;
  constructor(private session:SessionService, private uS:UserService, private router:Router) {
    
    
  }

  ngOnInit() {
    this.session.artist().subscribe(res=>{
      this.artists = res;
      
      console.log(this.artists);
    })
  }

 
  

}
