import { Component, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {HttpService} from '../../../shared/HttpService';
import {AuthSerice} from "../../../shared/auth.service"
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private router: Router,private http:HttpService,private auth:AuthSerice,private message:NzMessageService) { }
  ContactForm!: FormGroup;
  ngOnInit(): void {
    this.ContactForm = new FormGroup({
      email : new FormControl('',[ Validators.required,
                                     Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
                                    ]
                               ),
      phone: new FormControl('',[Validators.required]),
      name: new FormControl('',[Validators.required]),
      message: new FormControl('',[Validators.required]),

    })
  }
  Contact() {
    let val={
      email:this.ContactForm.value.email,
      phone:this.ContactForm.value.phone,
      name:this.ContactForm.value.name,
      message:this.ContactForm.value.message,
    }
  
    this.http.contact(val).subscribe((res:any)=>{
      if(res.success){
        res['success'] && this.message.success(res['message']);
        this.ContactForm.reset();
      }
      else{
        // this.router.navigate(['/auth/login']);
      }
    },(error: { error: { message: string | TemplateRef<void>; }; }) => {
      this.message.error(error.error.message);
    });
  }
  get f() { return this.ContactForm.controls; }
}
