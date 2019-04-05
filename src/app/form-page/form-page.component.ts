import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {
  public countries;
  constructor() {
    //Get country list.
    this.countries =[
      {"id" :1, "name": "India", "code":"IN"},
      {"id" :2, "name": "Nepal", "code":"NP"},
      {"id" :3, "name": "United Arab Emirates", "code": "AE"},
      {"id" :4, "name": "United Kingdom", "code": "GB"},
      {"id" :5, "name": "United States", "code": "US"},
      {"id" :6, "name": "Australia", "code": "AU"},
      {"id" :7, "name": "Austria", "code": "AT"},
      {"id" :8, "name": "Canada", "code": "CA"},
      {"id" :9, "name": "China", "code": "CN"},
    ];
   }

  ngOnInit() {
  }

  display(data:any){
    console.log(data);
  }

}
