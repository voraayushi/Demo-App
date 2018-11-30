import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  lat: number = 23.033863;
  lng: number = 72.585022;
  constructor() { }

  ngOnInit() {
  }

}
