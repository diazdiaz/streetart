import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'services/session';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
user;

  constructor( public sessionService: SessionService,
    private aR: ActivatedRoute,
    private router: Router) { 
      this.sessionService.isLogged().subscribe(user => (this.user = user));
    }

  ngOnInit() {
  }

}
