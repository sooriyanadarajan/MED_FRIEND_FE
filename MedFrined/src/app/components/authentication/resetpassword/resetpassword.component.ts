import { Component, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {HttpService} from '../../../shared/HttpService';
import {AuthSerice} from "../../../shared/auth.service"
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent {
  constructor(private router: Router,private http:HttpService,private auth:AuthSerice,private message:NzMessageService) { }
  changepassowrd!: FormGroup;
  ngOnInit(): void {
    this.changepassowrd = new FormGroup({
      email : new FormControl('',[ Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
                                    ]), 
      password: new FormControl('',[Validators.required]),
      confirmpassword: new FormControl('',[Validators.required])                     
    })
  }
  ChangePassword() {
    let val={
      email:this.changepassowrd.value.email,
      password:this.changepassowrd.value.password,
      confirmpassword:this.changepassowrd.value.confirmpassword
    }
  
    this.http.resetpassword(val).subscribe((res:any)=>{
      if(res.success){
        res['success'] && this.message.success(res['message']);
        this.changepassowrd.reset();
        this.router.navigate(['/auth/login']);
      }

      else{
        this.router.navigate(['/auth/generate']);
      }
    },(error: { error: { message: string | TemplateRef<void>; }; }) => {
      this.message.error(error.error.message);
    });
  }
  get f() { return this.changepassowrd.controls; }
}
