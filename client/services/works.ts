
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { map } from 'rxjs/operators';

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

  BASE_URL: string = "http://localhost:3000";
  constructor(private http: Http) {}

  getList() {
    return this.http
      .get(`${this.BASE_URL}/api/works`)
      .pipe(map(res => res.json()));
  }

  newWork(works) {
    return this.http
      .post(`${this.BASE_URL}/api/works`, works)
      .pipe(map(res => res.json()));
  }

  get(id) {
    return this.http
      .get(`${this.BASE_URL}/api/works/${id}`)
      .pipe(map(res => res.json()));
  }

  edit(works) {
    return this.http
      .put(`${this.BASE_URL}/api/works/${works._id}`, works)
      .pipe(map(res => res.json()));
  }

  remove(id) {
    return this.http
      .delete(`${this.BASE_URL}/api/works/${id}`)
      .pipe(map(res => res.json()));
  } 

}