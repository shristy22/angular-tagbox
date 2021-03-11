import { Component, OnInit } from '@angular/core';
// import { GridDataResult } from '@progress/kendo-angular-grid';
// import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { HttpClient } from '@angular/common/http';
import { checklist } from './checklist-module';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  rows: checklist[] = []; 
  found: boolean = false;
  to_search: string = "";
  search: boolean = false;
  description: any;
  name: string;
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

  ngOnInit() {
    this.rows = [
      {
        Name : "kitchen utensil",
        // Name: 'a',
        Description: "checklist for Utensil Cleansing",
        Create: "Robin",
        CreationDate: new Date("21-May-2019"),
        CreationTime: new Date("21-May-2019 07:49:28"),
        UpdationDate: new Date("25-May-2019"),
        UpdationTime: new Date("25-May-2019 07:49:28"),
      },
      {
        Name : "kitchen",
        Description: "checklist for appliance handling",
        Create: "ashutosh",
        CreationDate: new Date("21-May-2019"),
        CreationTime: new Date("21-May-2019 07:49:28"),
        UpdationDate: new Date("25-May-2019"),
        UpdationTime: new Date("25-May-2019 07:49:28"),
      },
      {
        Name : "outdoor purpose",
        Description: "outdoor for Utensil Cleansing",
        Create: "amy",
        CreationDate: new Date("21-May-2019"),
        CreationTime: new Date("21-May-2019 07:49:28"),
        UpdationDate: new Date("25-May-2019"),
        UpdationTime: new Date("25-May-2019 07:49:28"),
      },
      {
        Name : "outdoor purpose",
        Description: "outdoor for Utensil Cleansing",
        Create: "robert",
        CreationDate: new Date("21-May-2019"),
        CreationTime: new Date("21-May-2019 07:49:28"),
        UpdationDate: new Date("25-May-2019"),
        UpdationTime: new Date("25-May-2019 07:49:28"),
      },
      {
        Name : "outdoor purpose",
        Description: "outdoor for Utensil Cleansing",
        Create: "Robin",
        CreationDate: new Date("21-May-2019"),
        CreationTime: new Date("21-May-2019 07:49:28"),
        UpdationDate: new Date("25-May-2019"),
        UpdationTime: new Date("25-May-2019 07:49:28"),
      },
      {
        Name : "outdoor purpose",
        Description: "outdoor for Utensil Cleansing",
        Create: "Robin",
        CreationDate: new Date("21-May-2019"),
        CreationTime: new Date("21-May-2019 07:49:28"),
        UpdationDate: new Date("25-May-2019"),
        UpdationTime: new Date("25-May-2019 07:49:28"),
      },
      {
        Name : "outdoor purpose",
        Description: "outdoor for Utensil Cleansing",
        Create: "sachin",
        CreationDate: new Date("21-May-2019"),
        CreationTime: new Date("21-May-2019 07:49:28"),
        UpdationDate: new Date("25-May-2019"),
        UpdationTime: new Date("25-May-2019 07:49:28"),
      },
      {
        Name : "outdoor purpose",
        Description: "outdoor for Utensil Cleansing",
        Create: "Robin",
        CreationDate: new Date("21-May-2019"),
        CreationTime: new Date("21-May-2019 07:49:28"),
        UpdationDate: new Date("25-May-2019"),
        UpdationTime: new Date("25-May-2019 07:49:28"),
      },
      {
        Name : "outdoor purpose",
        Description: "outdoor for Utensil Cleansing",
        Create: "ram",
        CreationDate: new Date("21-May-2019"),
        CreationTime: new Date("21-May-2019 07:49:28"),
        UpdationDate: new Date("25-May-2019"),
        UpdationTime: new Date("25-May-2019 07:49:28"),
      },
      {
        Name : "outdoor purpose",
        Description: "outdoor for Utensil Cleansing",
        Create: "Robin",
        CreationDate: new Date("21-May-2019"),
        CreationTime: new Date("21-May-2019 07:49:28"),
        UpdationDate: new Date("25-May-2019"),
        UpdationTime: new Date("25-May-2019 07:49:28"),
      },
      
     
    ]
    // this.httpClient.get('checklist.json').subscribe((result:Checklist[])=>{
    //   this.Checklist= result;
    // });
  }
 
  
//  Sort(){
//   // var i=0;
//   this.rows.sort(( a, b ) => a.Name > b.Name ? 1 : -1 )
//  }
  Search(){
    if(this.name != ""){
      this.rows= this.rows.filter(res=>{
        return res.Name.toLowerCase().match(this.name.toLowerCase()) || 
              res.Description.toLowerCase().match(this.name.toLowerCase()) || 
              res.Create.toLowerCase().match(this.name.toLowerCase())
      })
    }
    else if(this.name === ""){
      this.ngOnInit();
    }
    
  }
  // searchfnc(){   
  //   this.to_search= (<HTMLInputElement>document.getElementById("search")).value;
  // //  var found = false;
  //   for(var i=0;i<this.rows.length;i++){
  //    if(this.rows[i].Name===this.to_search){
  //      this.found=true;
  //      break;
  //    }
  //  }
  //  if(!this.found) {
  //    alert("not found");
  //    this.search=false;
  //  }
  //   if(this.to_search!="" && this.found)
  //   this.search = true;
  //   else this.search = false;
  // }
  // clearfnc(){
  //   this.search=false;

  // }

}
