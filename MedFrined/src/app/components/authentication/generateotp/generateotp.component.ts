import { Component,TemplateRef,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {HttpService} from '../../../shared/HttpService';
import {AuthSerice} from "../../../shared/auth.service"
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-generateotp',
  templateUrl: './generateotp.component.html',
  styleUrls: ['./generateotp.component.scss']
})
export class GenerateotpComponent {
  constructor(private router: Router,private http:HttpService,private auth:AuthSerice,private message:NzMessageService) { }
  otpForm!: FormGroup;
  ngOnInit(): void {
    this.otpForm = new FormGroup({
      email : new FormControl('',[ Validators.required,
                                     Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
                                    ]),                        
    })
  }
  Generate() {
    let val={
      email:this.otpForm.value.email,
    }
  
    this.http.otp(val).subscribe((res:any)=>{
      if(res.success){
        // this.auth.isLoggedIn=true;
        res['success'] && this.message.success(res['message']);
        this.otpForm.reset();
        this.router.navigate(['/auth/forgot']);
      }

      else{
        // this.auth.isLoggedIn=false;
        this.router.navigate(['/auth/generate']);
      }
    },(error: { error: { message: string | TemplateRef<void>; }; }) => {
      this.message.error(error.error.message);
    });
  }
  get f() { return this.otpForm.controls; }
}
