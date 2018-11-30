import { Injectable } from '@angular/core';
import {RequestService} from '../request/request.service';

@Injectable({
  providedIn: 'root'
})
export class ForgotPwdService {

  constructor(private request:RequestService) {
   }
   forgotPwd(data){
    //  console.log(data);
    return new Promise((resolve,reject)=>{
      let body={
        email:data.email
      };
      this.request.post('forgotPassword',body).then((res)=>{
        resolve(res)
        // console.log(res);
      },(err)=>{
        reject(err)
      })
    });
   }

   verifyCode(email,code){
     return new Promise((resolve,reject)=>{
       let body={
        verification_code:code,
        email:email
       };
       this.request.post('verificationPassword',body).then((res)=>{
         resolve(res)
       },(err)=>{
         reject(err)
       })
     });
   }

   resetPassword(newpassword,confirmpassword,email){
     return new Promise((resolve,reject)=>{
       let body={
        new_password:newpassword,
        confirm_password:confirmpassword,
        email:email
       };
       this.request.post('resetPassword',body).then((res)=>{
         resolve(res)
       },(err)=>{
         reject(err)
       })
     });
   }
}
