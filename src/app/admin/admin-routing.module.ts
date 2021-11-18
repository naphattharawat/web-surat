import { HospitalsComponent } from './hospitals/hospitals.component';
import { UsersComponent } from './users/users.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: 'admin', component: LayoutComponent, children: [
      { path: 'users', component: UsersComponent },
      { path: 'hospitals', component: HospitalsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
