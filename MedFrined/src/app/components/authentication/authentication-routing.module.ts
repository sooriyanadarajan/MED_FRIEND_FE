import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component'
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from '../authentication/forgot-password/forgot-password.component';
import { GenerateotpComponent } from '../authentication/generateotp/generateotp.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path:'forgot',
    component: ForgotPasswordComponent,
  },
  {
    path:'generate',
    component: GenerateotpComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
