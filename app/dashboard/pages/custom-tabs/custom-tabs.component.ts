import { Component, OnInit } from '@angular/core';
import { _MatTabNavMixinBase } from '@angular/material/tabs/typings/tab-nav-bar';

@Component({
  selector: 'tabs',
  templateUrl: './custom-tabs.component.html',
  styleUrls: ['./custom-tabs.component.css']
})
export class CustomTabsComponent implements OnInit {
  tabname=['Tab 1','Tab 2','Tab 3'];
  selectedtab=this.tabname[0];
   constructor() { }

  ngOnInit() {
  }

}
