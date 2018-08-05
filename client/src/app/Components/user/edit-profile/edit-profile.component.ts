import { Component, OnInit } from '@angular/core';
import { UserService } from 'services/user';
import { SessionService } from 'services/session';
import { ActivatedRoute, Router } from '@angular/router';
import { endWith } from "rxjs/operators";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

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
      })
    );
  }

  ngOnInit() {}

  edit(user) {
    this.userService.edit(this.user).subscribe(user => {
      this.user = user;
      this.router.navigate(["/profile"]);
    });
  }
}
