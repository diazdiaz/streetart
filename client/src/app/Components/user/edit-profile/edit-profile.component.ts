import { Component, OnInit } from '@angular/core';
import { UserService } from 'services/user';
import { SessionService } from 'services/session';
import { ActivatedRoute, Router } from '@angular/router';
import { endWith } from "rxjs/operators";
import { ClrFormsNextModule } from "@clr/angular";
import { FileUploader } from "ng2-file-upload";
import {environment} from "../../../../environments/environment";
import { Http } from "@angular/http";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: `${environment.BASEURL}/api/profile/edit/${this.sessionService.user._id}`,
    method: "PUT"
  });
    user;
    feedback;
    file;
    updates = {
     username: '',
     email: '',
     name: '',
     phone: '',
     bio: '',
    };


  constructor(
    public userService: UserService,
    public sessionService: SessionService,
    private route: ActivatedRoute,
    private router: Router,
    public http:Http,
  ) { 
    this.route.params.subscribe(params =>
      this.userService.get(params.id).subscribe(user => {
        this.user = user;
      })
    );
  }

  ngOnInit() {
    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    }; 
  }
  edit() {
    if(this.file==undefined){
      console.log(this.updates)
      this.userService.edit(this.user,this.updates).subscribe(user=>{
        this.user = user;
      })

    }else{
      console.log(this.updates)
      this.uploader.onBuildItemForm = (item, form) => {
      form.append("username", this.updates.username);
      form.append("email", this.updates.email);
      form.append("name", this.updates.name);
      form.append("phone",this.updates.phone);
      form.append("bio",this.updates.bio);
      form.append("id",this.user._id)
    }
    this.uploader.uploadAll();
        this.uploader.onCompleteItem = r => {
          console.log(r)
    this.router.navigate(['/profile'])
        };
    }
    
  // edit(user) {
  //   this.userService.edit(this.user).subscribe(user => {
  //     this.user = user;
  //     console.log(user);
  //     this.router.navigate(["/profile"]);
  //   });
  // }
}
}
