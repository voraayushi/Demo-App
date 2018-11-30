import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-accordion',
  templateUrl: './custom-accordion.component.html',
  styleUrls: ['./custom-accordion.component.css']
})
export class CustomAccordionComponent implements OnInit {
current:number=-1;
items=[];
  constructor() { }

  ngOnInit() {
    this.items=[{name:'one',desc:'Hello in accordion 1'},{name:'two',desc:'Hello in accordion 2'},{name:'three',desc:'Hello in accordion 3'},{name:'four',desc:'Hello in accordion 4'}];
  }

}
