import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NzTimePickerComponent } from 'ng-zorro-antd/time-picker';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormControl, FormGroup, Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthSerice } from '../../../shared/auth.service';
import {HttpService} from '../../../shared/HttpService';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
   // @ViewChild('timePicker') timePicker!: NzTimePickerComponent;
   @ViewChild('timePicker', { static: false }) timePicker!: NzTimePickerComponent;
   profileForm!: FormGroup;
   constructor(private auth:AuthSerice,private http:HttpService,private formBuilder: FormBuilder,private router: Router,private message:NzMessageService) { 
     //slotbooking
   this.profileForm = this.formBuilder.group({
     name: new FormControl('',Validators.required),
     email: new FormControl('',Validators.required),
     password: new FormControl('',Validators.required),
     confirmpassword: new FormControl('',Validators.required),
   });
   }
   SubmitProfile(){
    let val={
      name:this.profileForm.value.name,
      email:this.profileForm.value.email,
      password:this.profileForm.value.password,
      confirmpassword: this.profileForm.value.confirmpassword,
    }
    console.log(this.profileForm)
    this.http.updateprofile(val).subscribe((res:any)=>{
      if(res.success){
        res['success'] && this.message.success(res['message']);
        this.profileForm.reset();
      }
      else{
      }
    },(error: { error: { message: string | TemplateRef<void>; }; }) => {
      this.message.error(error.error.message);
    });
    // console.log(this.slotbooking)
  }
}
