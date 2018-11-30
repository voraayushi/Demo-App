import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../service/login/login.service';
import {AuthService} from '../../service/auth/auth.service';
import { Router ,ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData=[];
  status=true;
  message;
  returnUrl:String;
  constructor(private loginService:LoginService,
    private auth:AuthService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    console.log("inloggin");
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
      this.router.navigate([this.returnUrl]);
  }

  login(data){
    //  console.log(this.loginData);

    this.loginService.login(this.loginData).then((res: any) => {
      if (res.res == 1) {
          this.auth.setStatus(res['teacher_id']);
          localStorage.setItem('teacher_id', res['teacher_id']);
      }
      if (res.res == 0) {
          this.message = res['msg'];
          this.status = false;
      }
      this.router.navigate([this.returnUrl]);
  })

    //  this.loginService.login(this.loginData).then((res:any)=>{
    //   console.log(res);
    //   if(res['res']==1){
        
    //     this.auth.setStatus(res['teacher_id']);
    //     localStorage.setItem('teacher_id',res['teacher_id']);
    //     console.log("in login",this.auth.isLoggednIn());
    //     this.router.navigate([this.returnUrl]);

    //   }
    //   if(res['res']==0){
    //     this.message=res['msg'];
    //     this.status=false;
    //   }
    //   this.router.navigate([this.returnUrl]);
    //  },(err)=>{
    //   console.log(err);
    //  })
  }

}
