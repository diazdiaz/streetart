import { Component, OnInit } from '@angular/core';
import { SessionService } from 'services/session';
import { UserService } from 'services/user';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  artists:Array<object>;
  constructor(private session:SessionService, private uS:UserService) { }

  ngOnInit() {
  }

  artist(){
    this.session.artist().subscribe(res=>{
      this.artists = res;
      console.log(res);
    })
  }

}
