import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {

  usersName = [];
  /*Use for both variables */
  constructor(){
   
    this.usersName=[
      {"name":"Sam","Phonenumber":"12589645","address":"Pune"},
      {"name":"Saumit","Phonenumber":"12589645","address":"Pune"},
      {"name":"Govind","Phonenumber":"12589645","address":"Beed"}
  
    ];
  }
  ngOnInit() {
  }
  

}
