import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';

export function tokenGetter() {
  return sessionStorage.getItem('token');
}

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ['localhost:3000'],
        disallowedRoutes: ['/login', '/access-denied']
      }
    })
  ]
})
export class AuthModule { }
