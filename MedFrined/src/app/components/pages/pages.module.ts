import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorappointmentComponent } from './doctorappointment/doctorappointment.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NgZorroAntdModule } from '../../ng-zorro-antd.module';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    DoctorappointmentComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,NzModalModule, NzButtonModule,NgZorroAntdModule,NzTimePickerModule,ReactiveFormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PagesModule { }
