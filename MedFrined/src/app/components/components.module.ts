import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from '../shared/header/header.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    NzMessageModule,
  ]
})
export class ComponentsModule { }
