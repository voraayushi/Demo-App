import { Component, OnInit } from '@angular/core';
import {StrengthBarComponent} from '../strength-bar/strength-bar.component'
@Component({
  selector: 'app-pwd-strength-bar',
  templateUrl: './pwd-strength-bar.component.html',
  styleUrls: ['./pwd-strength-bar.component.css']
})
export class PwdStrengthBarComponent implements OnInit {
  pwd;
  constructor() { }

  ngOnInit() {
  }

}
