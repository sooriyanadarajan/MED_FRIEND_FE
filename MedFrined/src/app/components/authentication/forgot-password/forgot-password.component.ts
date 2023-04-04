import { Component, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {HttpService} from '../../../shared/HttpService';
import {AuthSerice} from "../../../shared/auth.service"
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  constructor(private router: Router,private http:HttpService,private auth:AuthSerice,private message:NzMessageService) { }
  verifyotp!: FormGroup;
  ngOnInit(): void {
    this.verifyotp = new FormGroup({
      email : new FormControl('',[ Validators.required,
                                     Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
                                    ]),  
      otp:new FormControl('',)                      
    })
  }
  verifyOtp() {
    let val={
      email:this.verifyotp.value.email,
      otp:this.verifyotp.value.otp
    }
  
    this.http.verifyotp(val).subscribe((res:any)=>{
      if(res.success){
        // this.auth.isLoggedIn=true;
        res['success'] && this.message.success(res['message']);
        this.verifyotp.reset();
        this.router.navigate(['/auth/reset']);
      }

      else{
        // this.auth.isLoggedIn=false;
        this.router.navigate(['/auth/forgot']);
      }
    },(error: { error: { message: string | TemplateRef<void>; }; }) => {
      this.message.error(error.error.message);
    });
  }
  get f() { return this.verifyotp.controls; }
}
