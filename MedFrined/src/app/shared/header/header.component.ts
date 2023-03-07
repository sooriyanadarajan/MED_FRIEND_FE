import { Component,TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import {HttpService} from '../HttpService';
import {AuthSerice} from "../auth.service"
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  constructor(private router: Router,private http:HttpService,private auth:AuthSerice,private message:NzMessageService) { }
  getname:any
  Logout(){
this.http.logout().subscribe((res:any)=>{
  if(res.success){
    this.auth.isLoggedIn=true;
    this.router.navigate(['/auth/login']);
    res['success'] && this.message.success(res['message']);
  }
  else{
    this.router.navigate(['/dashboard']);
  }
},(error: { error: { message: string | TemplateRef<void>; }; }) => {
  this.message.error(error.error.message);
}
)
  }
  profile(){
    this.http.getprofile().subscribe((res:any)=>{
      if(res.success){
      this.getname= res.data.name;
      console.log(this.getname);
      }
    })
  }
}
