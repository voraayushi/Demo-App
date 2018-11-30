import { Component, OnInit } from '@angular/core';
import {UserService } from '../../../service/user/user.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
data=[];
userData=[];
techerId;
  constructor(private user:UserService) { }

  ngOnInit() {
    this.techerId=localStorage.getItem('teacher_id');
    // console.log(this.techerId);
    this.user.getInfo(this.techerId).then((res)=>{
      this.data=res['data'];
      this.userData=this.data['teacher_details'];
      // console.log(this.userData['teacher_name']);
    },(err)=>{
      console.log('Error in header',err);
    })
  }

}
