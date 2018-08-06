
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { map } from 'rxjs/operators';
import { environment } from '../src/environments/environment';



@Injectable()
export class UserService{

  constructor(private http: Http) {
    
  }

  getUserDetails() {
    return this.http
      .get(`${environment.BASEURL}/api/profile`)
      .pipe(map(res => res.json()));
  }

  get(id) {
    return this.http
      .get(`${environment.BASEURL}/api/profile/${id}`)
      .pipe(map(res => res.json()));
  }

  edit(user) {
  
    return this.http
      .put(`${environment.BASEURL}/api/profile/edit/${user._id}`, user)
      .pipe(map(res => res.json()));
  }


}