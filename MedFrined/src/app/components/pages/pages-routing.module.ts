import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';

const routes: Routes = [

 {
  path:'',
  component:LayoutComponent,
  children:[
    {
     path:'dashboard',
     component:DashboardComponent,
     canActivate:[AuthGuard],
    }
  ]

 },
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
