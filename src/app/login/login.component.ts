import { AlertService } from './../services/alert.service';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isError: any;
  constructor(
    private router: Router,
    private loginService: LoginService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
  }

  async onClickLogin() {
    try {
      this.isError = false;
      const rs: any = await this.loginService.login(this.form.username, this.form.password);
      if (rs.ok) {
        sessionStorage.setItem('token', rs.token);
        if (rs.info.userType == 'ADMIN') {
          this.router.navigateByUrl('/admin');
        } else if (rs.info.userType == 'USER') {
          this.router.navigateByUrl('/user');
        } else {
          this.router.navigateByUrl('/access-denied')
        }
      } else {
        this.isError = true;
      }
    } catch (error) {
      this.alertService.serverError();
    }
  }

  onKeyEnter(e: any) {
    if (e.keyCode == 13) {
      this.onClickLogin();
    }
  }

}
