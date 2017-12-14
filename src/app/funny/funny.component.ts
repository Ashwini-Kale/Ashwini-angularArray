import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funny',
  template: '    <ng-content ></ng-content>',
  styleUrls: ['./funny.component.css']
})
export class FunnyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
