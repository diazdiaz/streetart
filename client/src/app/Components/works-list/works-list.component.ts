
import { Component, OnInit } from '@angular/core';
import { WorksService } from 'services/works';

@Component({
  selector: 'app-works-list',
  templateUrl: './works-list.component.html',
  styleUrls: ['./works-list.component.css']
})
export class WorksListComponent implements OnInit {
works: Array<any>;

  constructor(private wS:WorksService) {
    
   }

  ngOnInit() {
    this.wS.getList().subscribe(data=> {
      this.works = data;
      console.log(this.works);
    });
  }

}