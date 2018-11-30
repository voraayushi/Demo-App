import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute, RouterModule } from '@angular/router';
import {ForgotPwdService} from '../../service/forgot-pwd/forgot-pwd.service';
import {AuthService} from '../../service/auth/auth.service';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.css']
})
export class VerifyCodeComponent implements OnInit {
  message;
  status=false;
  VerifyData;
  returnUrl:string;
  // verifyMsg:String;
  verifyEmail:String;
  constructor(
      private router:Router,
      private route:ActivatedRoute,
      private forgotpass:ForgotPwdService,
      private auth:AuthService
    ) { }

  ngOnInit() {
    // let email=localStorage.getItem('email_verify');
    // if(email){
    //   this.message="Check your email to recover password";
    //   this.status=true;
    // }
    if(this.auth.isLoggednIn()){
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
      this.router.navigate([this.returnUrl]);
    }
    // this.verifyMsg=this.route.snapshot.queryParams['msg'];
    // console.log('verifymsg',this.verifyMsg);
    this.verifyEmail=localStorage.getItem('email_verify');
    console.log('verifyEmail',this.verifyEmail);
  }

  verifyCode(data){
    this.forgotpass.verifyCode(this.verifyEmail,this.VerifyData).then((res)=>{
      console.log(res);
      if(res['res']==0){
        this.message="Verification code does not match";
      }
      if(res['res']==1){
        this.message="Verification code matches";
        this.router.navigate(['/resetpwd']);
      }
    },(err)=>{
      console.log('Verify Code Error',err);
    })

  }

}
