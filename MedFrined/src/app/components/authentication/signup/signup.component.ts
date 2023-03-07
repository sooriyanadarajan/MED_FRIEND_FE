import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../../shared/HttpService';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(private router: Router,private httpservice: HttpService,private formBuilder: FormBuilder) 
  {

  }
  SignUp!:FormGroup;
  showDiv = false;
  showDiv2 = true;
  ngOnInit(): void {
    
    this.SignUp=  this.formBuilder.group({  
      name: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[a-zA-Z ]*$')]],
      mobileNum: ['', [ Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10), Validators.maxLength(10)]], 
      email : ['',[Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-8])(?=.*[$#@$!)%~`*?(&^])[A-Za-z\d$@#)$!~`%(*?&^].{7,}')]],
      confirmPassword : ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-8])(?=.*[$@#$~`)!%*?(&^])[A-Za-z\d$@@$!~`)%*^(?&].{7,}')]],
    }
    )
  }
 
  Signup() {
    let val= {
      name:this.SignUp.get('name')?.value,
      mobileNum:this.SignUp.get('mobileNum')?.value,
      email:this.SignUp.get('email')?.value,
      password:this.SignUp.get('password')?.value,
      confirmPassword :this.SignUp.get('confirmPassword')?.value,
    }
    console.log(val)
    this.httpservice.signUp(val).subscribe((res:any)=>{
      console.log(res.message);
      if(res.success){
        // res['success'] && this.message.success(res['message']);
         this.router.navigate(['auth/login'])
        this.SignUp.reset();
      }else{}
    },error =>{
      // this.message.error(error.error.message);
    })
  }

   get f() { return this.SignUp.controls; }
   Show(){
    this.showDiv = true;
    this.showDiv2= false;
   }
   Show2(){
    this.showDiv = false;
    this.showDiv2= true;
   }
}
