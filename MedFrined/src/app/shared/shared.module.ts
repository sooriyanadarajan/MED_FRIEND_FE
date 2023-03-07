import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {RouterModule} from '@angular/router';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';

// import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    // HeaderComponent, 
  ],
  imports: [
    CommonModule,
    NzMenuModule,
    RouterModule,
    NzDrawerModule,
    NzDropDownModule,
    NzIconModule
  ],
  exports: [
    // HeaderComponent, 
    NzMenuModule,
    RouterModule,
    NzDrawerModule,
    NzDropDownModule,
    NzIconModule
  ]
})
export class SharedModule { }
