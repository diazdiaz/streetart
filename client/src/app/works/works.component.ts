import { Component, OnInit } from '@angular/core';
import { WorksService } from 'services/works';
import { Router } from '@angular/router';

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
  constructor(private wS: WorksService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.wS.newWork(this.newWork).subscribe(() => this.router.navigate(["/"]))
  }


}
