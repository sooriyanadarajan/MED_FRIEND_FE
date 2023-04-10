import { Component } from '@angular/core';

import { Router } from '@angular/router';
import {HttpService} from '../../../shared/HttpService';
import {AuthSerice} from "../../../shared/auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
  constructor(private router: Router,private http:HttpService,private auth:AuthSerice) { }
  ngOnInit(): void {
    this.profile();
    this.appointmenthistory();
    this.appointmentlist();
  }
  getname:any
  getappointmentdata=0;
  profile(){
    this.http.getprofile().subscribe((res:any)=>{
      if(res.success){
      this.getname= res['data'];
      console.log(this.getname);
      }
    })
  }
  appointmenthistory(){
    this.http.getappointment().subscribe((res:any)=>{
      if(res.success){
      this.getappointmentdata= res['data'].user;
      console.log(this.getappointmentdata);
      }
    })
  }
  // Initialize the array with an empty array
appointmenhis: any[] = [];
  appointmentlist() {
    this.http.appointmentlist().subscribe((res:any) => {
      if(res.success) {
        if(Array.isArray(res.data)) {
          this.appointmenhis = res.data;
        } else {
          console.error('Data is not an array:', res.data);
        }
      } else {
        console.error('API error:', res.message);
      }
    }, err => {
      console.error('HTTP error:', err);
    });
  }
  
  
  
}
