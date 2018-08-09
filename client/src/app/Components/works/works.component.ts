import { Component, OnInit } from '@angular/core';
import { WorksService } from 'services/works';
import { Router } from '@angular/router';
import { SessionService } from 'services/session';
import { FileUploader } from "ng2-file-upload";
import {environment} from "../../../environments/environment"

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: `${environment.BASEURL}/api/works`,
    method: "POST"
  });
  feedback;
  file;
  newWork = {
    user_id:this.session.user._id,
    type:'',
    style:'',
    description:'',
    price:'',
 

  }
  typeworks = [
    {id: 1, name: "Sculpture"},
    {id: 2, name: "Painting"},
    {id: 3, name: "Photography"},
    {id: 4, name: "Other"},
  ];
 selectedValue = null;
  constructor(private wS: WorksService, private router: Router,private session:SessionService) { }

  ngOnInit() {
    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    };
  }

  
  
  submit() {
    console.log(this.newWork)
    this.uploader.onBuildItemForm = (item, form) => {
      form.append("style", this.newWork.style);
      form.append("description", this.newWork.description);
      form.append("price", this.newWork.price);
      form.append("id",this.session.user._id)
      form.append("userid", this.session.user._id)
      if(this.selectedValue==undefined)this.selectedValue = 'Other'
         this.newWork.type = this.selectedValue.name;
      form.append("type",this.newWork.type)
      
    };
    this.uploader.uploadAll();
    this.uploader.onCompleteItem = r => {
      console.log(r)
      
    };
   this.router.navigate(['/workslist'])
  }
  
  // submit() {
  //   console.log(this.selectedValue);
  //   if(this.selectedValue==undefined)this.selectedValue = 'Other'
  //   this.newWork.type = this.selectedValue.name;
  //   this.wS.newWork(this.newWork,this.session.user).subscribe(() => this.router.navigate(["/workslist"]))
  // }
  
}
  
  