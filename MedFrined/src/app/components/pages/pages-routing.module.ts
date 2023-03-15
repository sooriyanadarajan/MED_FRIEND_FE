import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { DoctorappointmentComponent } from './doctorappointment/doctorappointment.component';

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
