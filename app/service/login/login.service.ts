import { Injectable } from '@angular/core';
import {RequestService} from '../request/request.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private request:RequestService) { }

  login(data){
    let body={
      username:data.email,
      password:data.pwd
    };
    console.log(body);
    return new Promise((resolve,reject)=>{
      this.request.post('teacherLogin',body).then((res)=>{
        resolve(res)
      },(err)=>{
        resolve(err)
      })
    });
  }
}
