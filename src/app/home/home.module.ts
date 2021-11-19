import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgChartsModule } from 'ng2-charts';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgChartsModule,
    ClarityModule,
    FormsModule
  ]
})
export class HomeModule { }
