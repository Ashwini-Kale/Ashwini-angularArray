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
  constructor(){
    for(let i=1;i<=10;i++){
    this.numberArr.push(i);
   }
}
}
