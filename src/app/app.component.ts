import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  /*Create Array */
  names=['Ashwini','Sush','Supriya','Govind','Sangram','Saumit','Kalip'];

  numberArr=[];
  /* Use for perticular variabke like numberArr
  constructor(){
    for(let i=1;i<=10;i++){
    this.numberArr.push(i);
   }
}*/
users = [];
/*Use for both variables */
constructor(){
  for(let i=1;i<=10;i++){
    this.numberArr.push(i);
   }
  this.users=[
    /* json format for array*/
    {"name":"Ash","Phonenumber":"12589645","address":"Pune"},
    {"name":"Sush","Phonenumber":"12589645","address":"Pune"},
    {"name":"Govind","Phonenumber":"12589645","address":"Beed"}

  ];
}



}
