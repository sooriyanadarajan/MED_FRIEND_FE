import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constant } from './Contents';

@Injectable({ providedIn: 'root' })
export class HttpService {
  
  constructor(private http: HttpClient) { }
  
  signUp(value:any) {
    return this.http.post<HttpService>(Constant.signUp, value);
  }
  logIn(val:any) {
    return this.http.post(Constant.login, val);
  }
  logout(){
    return this.http.get(Constant.logout);
  }
  getprofile(){
    return this.http.get(Constant.profile);
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
  



