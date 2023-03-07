import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NzMessageModule } from 'ng-zorro-antd/message';


import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { GenerateotpComponent } from './generateotp/generateotp.component';


@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    ForgotPasswordComponent,
    GenerateotpComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    NzMessageModule
  ]
})
export class AuthenticationModule { }
