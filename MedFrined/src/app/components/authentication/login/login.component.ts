import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {HttpService} from '../../../shared/HttpService';
import {AuthSerice} from "../../../shared/auth.service"
// import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router,private http:HttpService,private auth:AuthSerice) { }
  signinForm!: FormGroup;
  // ngOnInit(): void {
  //   this.signinForm = new FormGroup({
  //     email : new FormControl('',[ Validators.required,
  //                                    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
  //                                   ]
  //                              ),
  //     password : new FormControl('',[Validators.required,
  //                                  Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-8])(?=.*[$@#)$^(!%*?&])[A-Za-z\d$@#~`$)!%(^~`*?&].{7,}')
  //                                     ]
  //                                ),                        
  //   })
  // }
  // onSubmit(form: FormGroup) {
  //   console.log(this.signinForm.value.email);
  //   let val={
  //     email:this.signinForm.value.email,
  //     password:this.signinForm.value.password,
  //   }
  
  //   this.http.logIn(val).subscribe((res:any)=>{
  //     if(res.success){
  //       this.auth.isLoggedIn=true;
  //       res['success'] && this.message.success(res['message']);
  //       form.reset();
  //     }
  //     else{
  //       this.auth.isLoggedIn=false;
  //       this.router.navigate(['/auth/signup']);
  //     }
  //   }, );
  // }
  // get f() { return this.signinForm.controls; }
}
