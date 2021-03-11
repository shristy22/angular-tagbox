import { Component, OnInit } from '@angular/core';
// import { GridDataResult } from '@progress/kendo-angular-grid';
// import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  // Checklist: Checklist[]; 
  description: any;
  name: any;
  p:number = 1;
   show:boolean = false;
   show1:boolean = false;

  dropdown() {
    this.show = !this.show;
  }
  dropdown1() {
    this.show1 = !this.show1;
  }
  key: string = 'name';
  reverse: boolean=false;
  sort(key){
    this.key=key;
    this.reverse=!this.reverse;
  }
  
  constructor( ) { }

  ngOnInit(): void {
    // this.httpClient.get('checklist.json').subscribe((result:Checklist[])=>{
    //   this.Checklist= result;
    // });
  }
  // headers = ["Name","Description","Create","Creation Date","Updation Date"];
  // search(){
  //   if(this.name == ""){
  //     this.ngOnInit();
  //   }
  //   else{
  //     this.
  //   }
  // }
  rows = [
    {
      Name : "Kitchen Utensil",
      Description: "checklist for Utensil Cleansing",
      Create: "Robin",
      CreationDate: new Date("21-May-2019"),
      CreationTime: new Date("21-May-2019 07:49:28"),
      UpdationDate: new Date("25-May-2019"),
      UpdationTime: new Date("25-May-2019 07:49:28"),
    },
    {
      Name : "Kitchen Utensil",
      Description: "aa for Utensil Cleansing",
      Create: "Robin",
      CreationDate: new Date("21-May-2019"),
      CreationTime: new Date("21-May-2019 07:49:28"),
      UpdationDate: new Date("25-May-2019"),
      UpdationTime: new Date("25-May-2019 07:49:28"),
    },
    {
      Name : "B Utensil",
      Description: "Checklist for Utensil Cleansing",
      Create: "Robin",
      CreationDate: new Date("21-May-2019"),
      CreationTime: new Date("21-May-2019 07:49:28"),
      UpdationDate: new Date("25-May-2019"),
      UpdationTime: new Date("25-May-2019 07:49:28"),
    },
    {
      Name : "A Utensil",
      Description: "zhecklist for Utensil Cleansing",
      Create: "Robin",
      CreationDate: new Date("21-May-2019"),
      CreationTime: new Date("21-May-2019 07:49:28"),
      UpdationDate: new Date("25-May-2019"),
      UpdationTime: new Date("25-May-2019 07:49:28"),
    },
    {
      Name : "jkhbhj Utensil",
      Description: "zhecklist for Utensil Cleansing",
      Create: "Robin",
      CreationDate: new Date("21-May-2019"),
      CreationTime: new Date("21-May-2019 07:49:28"),
      UpdationDate: new Date("25-May-2019"),
      UpdationTime: new Date("25-May-2019 07:49:28"),
    },
    {
      Name : "A Utensil",
      Description: "zhecklist for Utensil Cleansing",
      Create: "Robin",
      CreationDate: new Date("21-May-2019"),
      CreationTime: new Date("21-May-2019 07:49:28"),
      UpdationDate: new Date("25-May-2019"),
      UpdationTime: new Date("25-May-2019 07:49:28"),
    },
    {
      Name : "A Utensil",
      Description: "zhecklist for Utensil Cleansing",
      Create: "Robin",
      CreationDate: new Date("21-May-2019"),
      CreationTime: new Date("21-May-2019 07:49:28"),
      UpdationDate: new Date("25-May-2019"),
      UpdationTime: new Date("25-May-2019 07:49:28"),
    },
    {
      Name : "A Utensil",
      Description: "zhecklist for Utensil Cleansing",
      Create: "Robin",
      CreationDate: new Date("21-May-2019"),
      CreationTime: new Date("21-May-2019 07:49:28"),
      UpdationDate: new Date("25-May-2019"),
      UpdationTime: new Date("25-May-2019 07:49:28"),
    },
    {
      Name : "A Utensil",
      Description: "zhecklist for Utensil Cleansing",
      Create: "Robin",
      CreationDate: new Date("21-May-2019"),
      CreationTime: new Date("21-May-2019 07:49:28"),
      UpdationDate: new Date("25-May-2019"),
      UpdationTime: new Date("25-May-2019 07:49:28"),
    },
    {
      Name : "A Utensil",
      Description: "zhecklist for Utensil Cleansing",
      Create: "Robin",
      CreationDate: new Date("21-May-2019"),
      CreationTime: new Date("21-May-2019 07:49:28"),
      UpdationDate: new Date("25-May-2019"),
      UpdationTime: new Date("25-May-2019 07:49:28"),
    },
  ]

}
