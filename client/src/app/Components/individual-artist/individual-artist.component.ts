import { Component, OnInit } from '@angular/core';
import { UserService } from 'services/user';
import { SessionService } from 'services/session';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-individual-artist',
  templateUrl: './individual-artist.component.html',
  styleUrls: ['./individual-artist.component.css']
})
export class IndividualArtistComponent implements OnInit {

  user;
 


  constructor(
    public userService: UserService,
    public sessionService: SessionService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.route.params.subscribe(params =>
      this.userService.get(params.id).subscribe(user => {
        this.user = user;
        console.log(this.user)
      })
    );
  }

  ngOnInit() {}

 
  
}
