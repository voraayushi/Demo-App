import { Injectable } from '@angular/core';
import {RequestService} from '../request/request.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private request:RequestService
  ) { }

  getInfo(data){
    return new Promise((resolve,reject)=>{
      let body={
        teacher_id:data
      };
      this.request.post('teacherDetail',body).then((res)=>{
        resolve(res)
      },(err)=>{
        reject(err)
      })
    })
  }
}
