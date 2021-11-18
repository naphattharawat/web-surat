import { LoginModule } from './login/login.module';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    AccessDeniedComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    UserModule,
    AdminModule,
    LoginModule,
    HttpClientModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: 'API_URL', useValue: environment.apiUrl },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
