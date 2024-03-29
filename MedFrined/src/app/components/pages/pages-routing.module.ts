import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { DoctorappointmentComponent } from './doctorappointment/doctorappointment.component';
import { UploadprescriptionComponent } from '../pages/uploadprescription/uploadprescription.component'
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'doctor',
    component:DoctorappointmentComponent
  },
  {
    path:'uploadp',
    component:UploadprescriptionComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  }

//  {
//   path:'',
//   component:LayoutComponent,
//   children:[
//     {
//      path:'dashboard',
//      component:DashboardComponent,
//      canActivate:[AuthGuard],
//     }
//   ]

//  },
//  {
//   path:'dashboard',
//   component:DashboardComponent,
//   canActivate:[AuthGuard]
//  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
