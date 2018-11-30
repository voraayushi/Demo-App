import { NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ForgetPasswordComponent} from './forget-password/forget-password.component';
import { VerifyCodeComponent } from './verify-code/verify-code.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LogoutComponent } from './logout/logout.component';


const routes:Routes=[
    {path:'login',component:LoginComponent},
    {path:'forget-pwd',component:ForgetPasswordComponent},
    {path:'verify',component:VerifyCodeComponent},
    {path:'resetpwd',component:ResetPasswordComponent},
    {path:'logout',component:LogoutComponent}
    // {path:'',redirectTo:'/login',pathMatch:"full"},
    // {path:'**',redirectTo:'/login',pathMatch:"full"}
];

@NgModule({
    imports: [
        FormsModule, 
        ReactiveFormsModule,
        RouterModule.forRoot(routes)],

    declarations: [
        LoginComponent,
        ForgetPasswordComponent,
        VerifyCodeComponent,
        ResetPasswordComponent,
        LogoutComponent,
    ],

    exports: [RouterModule]
})
    export class AuthModule{

    }