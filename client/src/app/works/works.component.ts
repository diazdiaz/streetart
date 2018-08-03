import { Component, OnInit } from '@angular/core';
import { WorksService } from 'services/works';
import { Router } from '@angular/router';
import { SessionService } from 'services/session';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  newWork = {
    type:'',
    style:'',
    description:'',
    price:'',
    image:'', 
  }
  countries = [
    {id: 1, name: "Sculpture"},
    {id: 2, name: "Painting"},
    {id: 3, name: "Photography"},
    {id: 4, name: "Other"},
  ];
 selectedValue = null;
  constructor(private wS: WorksService, private router: Router,private session:SessionService) { }

  ngOnInit() {
  }

  submit() {
    console.log(this.selectedValue);
    if(this.selectedValue==undefined)this.selectedValue = 'Other'
    this.newWork.type = this.selectedValue.name;
    //this.wS.newWork(this.newWork,this.session.user).subscribe(() => this.router.navigate(["/"]))
  }


}
