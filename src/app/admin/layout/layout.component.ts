import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  fullname = '';
  private jwtHelperService: JwtHelperService = new JwtHelperService();
  constructor(
    private router: Router
  ) {
    const token: any = sessionStorage.getItem('token');
    if (token) {
      const decoded: any = this.jwtHelperService.decodeToken(token);
      console.log(decoded);

      this.fullname = `${decoded.first_name} ${decoded.last_name}`;
    }
  }

  ngOnInit(): void {
  }

  logout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
