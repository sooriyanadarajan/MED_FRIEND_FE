import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constant } from './Contents';

@Injectable({ providedIn: 'root' })
export class HttpService {
  
  constructor(private http: HttpClient) { }
  getToken() {
    // return this.cookie.get('token');
    return localStorage.getItem('isLoggedIn')
  }

  isLoggednIn() {
    const result = this.getToken();
    return (result == '' || result == null ? false : true);
  }
  signUp(value:any) {
    return this.http.post<HttpService>(Constant.signUp, value);
  }
  logIn(val:any) {
    return this.http.post(Constant.login, val);
  }
  otp(val:any){
    return this.http.post(Constant.otp, val)
  }
  verifyotp(val:any){
    return this.http.post(Constant.verifyotp, val)
  }
  resetpassword(val:any){
    return this.http.post(Constant.reset,val)
  }
  contact(val:any){
    return this.http.post(Constant.contactus,val)
  }
  logout(){
    return this.http.get(Constant.logout);
  }
  getprofile(){
    return this.http.get(Constant.profile);
  }
  getappointment(){
    return this.http.get(Constant.appointment);
  }
  getdoctor(){
    return this.http.get(Constant.doctorDetails);
  }
  slotbook(val:any){
    return this.http.post(Constant.slot, val);
  }
  purpose(){
    return this.http.get(Constant.doctpurpose);
  }
  appointmentlist(){
    return this.http.get(Constant.appointmentlist);
  }
//   recoverPassword(val: any) {
//     return this.http.post(Constant.recoverPassword, val);
//   }
//   resetPassword(id: string | null,val: { password: any; confirmPassword: any; }){
//     return this.http.post(Constant.resetPassword+id,val);
//   }

//   doctorDetails(value:any) {
//     return this.http.post<HttpService>(Constant.doctorDetails, value);
//   }
}
  



