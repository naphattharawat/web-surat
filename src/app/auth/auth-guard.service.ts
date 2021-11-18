import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  private jwtHelper: JwtHelperService = new JwtHelperService();
  constructor(
    private router: Router
  ) { }


  canActivate() {
    const token = sessionStorage.getItem('token');
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      const userType = decodedToken.userType;

      if (userType) {
        if (this.jwtHelper.isTokenExpired(token)) {
          this.router.navigate(['login']);
          return false;
        } else {
          if (userType == 'ADMIN' || userType == 'STAFF') {
            return true;
          } else {
            this.router.navigate(['access-denied']);
            return false;
          }
        }

      } else {
        this.router.navigate(['access-denied']);
        return false;
      }

    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
