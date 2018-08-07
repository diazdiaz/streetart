
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { map } from 'rxjs/operators';
import { environment } from '../src/environments/environment';

const {BASEURL} = environment;

interface WorksObject{
   type:string,
   style:string,
   description:string,
   price:number,
   image:any, 
}


@Injectable({
  providedIn: 'root'
})
export class WorksService {
works:WorksObject;


  constructor(private http: Http) {}

  getList() {
    return this.http
      .get(`${BASEURL}/api/works`)
      .pipe(map(res => res.json()));
  }

  newWork(works,user) {
    const id = user._id
    return this.http
      .post(`${BASEURL}/api/works`, {works,id})
      .pipe(map(res => res.json()));
  }

  get(id) {
    return this.http
      .get(`${BASEURL}/api/works/${id}`)
      .pipe(map(res => res.json()));
  }

  edit(works) {
    return this.http
      .put(`${BASEURL}/api/works/${works._id}`, works)
      .pipe(map(res => res.json()));
  }

  remove(id) {
    return this.http
      .delete(`${BASEURL}/api/works/${id}`)
      .pipe(map(res => res.json()));
  } 

}