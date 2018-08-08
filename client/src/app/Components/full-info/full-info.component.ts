import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'services/session';


@Component({
  selector: 'app-full-info',
  templateUrl: './full-info.component.html',
  styleUrls: ['./full-info.component.css']
})
export class FullInfoComponent implements OnInit {

  user;

  constructor( public sessionService: SessionService,
    private aR: ActivatedRoute,
    private router: Router) { 
      this.sessionService.isLogged().subscribe(user => (this.user = user));
      console.log(this.user)
    }

  ngOnInit() {
  }


}
