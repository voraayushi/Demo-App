import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth/auth.service';
import { Router ,ActivatedRoute, RouterModule } from '@angular/router';
import {ForgotPwdService} from '../../service/forgot-pwd/forgot-pwd.service'

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  newPwd;
  confirmPwd;
  message:String;
  verifyEmail;
  returnUrl:String;
  constructor(
      private auth:AuthService,
      private router:Router,
      private route:ActivatedRoute,
      private forgotpwd:ForgotPwdService
  ) { }

  ngOnInit() {
    if(this.auth.isLoggednIn()){
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
      this.router.navigate([this.returnUrl]);
    }
    this.verifyEmail=localStorage.getItem('email_verify');
    console.log(this.verifyEmail);
  }

  resetpassword(data){
    console
    if(this.newPwd != this.confirmPwd){
      this.message="Password doesn't match";
    }
    else{
      this.forgotpwd.resetPassword(this.newPwd,this.confirmPwd,this.verifyEmail).then((res)=>{
        console.log(res);
        if(res['res']==0){

        }
        if(res['res']==1){
          this.router.navigate(['/login']);
        }
      },(err)=>{
        console.log(err);
      })
    }
  }

}
