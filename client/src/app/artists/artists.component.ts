import { Component, OnInit } from '@angular/core';
import { SessionService } from 'services/session';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  artists:Array<object>;
  constructor(private session:SessionService) { }

  ngOnInit() {
  }

  artist(){
    this.session.artist().subscribe(res=>{
      this.artists = res;
    })
  }

}
