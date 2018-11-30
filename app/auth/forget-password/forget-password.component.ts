import { Component, OnInit } from '@angular/core';
import {ForgotPwdService} from '../../service/forgot-pwd/forgot-pwd.service';
import { Router ,ActivatedRoute, RouterModule } from '@angular/router';
import {AuthService} from '../../service/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  ForgotData=[];
  message;
  status=true;
  returnUrl:String;
  constructor(
    private forgotpass:ForgotPwdService,
    private router:Router,
    private route:ActivatedRoute,
    private auth:AuthService,
    private toast:ToastrService) { }

  ngOnInit() {
    if(this.auth.isLoggednIn()){
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
      this.router.navigate([this.returnUrl]);
    }
  }
  forgot(data){
    console.log(this.ForgotData);
    this.forgotpass.forgotPwd(this.ForgotData).then((res)=>{
      console.log(res);
      if(res['res']==0){
        this.message="This Email is not registered";
        this.status=false;
      }
      else{
        this.message="Check your email to recover password";
        localStorage.setItem('email_verify',this.ForgotData['email']);
        console.log(localStorage.getItem('email_verify'));
        this.router.navigate(['/verify/']);
        this.toast.success("Check your email to recover password",'Success');
      }
    },(err)=>{
      console.log(err);
    })
  }
}
