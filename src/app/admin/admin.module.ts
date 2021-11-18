import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { UsersComponent } from './users/users.component';
import { HospitalsComponent } from './hospitals/hospitals.component';


@NgModule({
  declarations: [
  
    LayoutComponent,
       UsersComponent,
       HospitalsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ClarityModule,
    FormsModule
  ]
})
export class AdminModule { }
