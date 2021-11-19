import { UsersService } from './../services/users.service';
import { AlertService } from './../../services/alert.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id: any;
  isUpdate = false;
  info: any = {};
  titleList: any = [];
  constructor(
    private route: ActivatedRoute,
    private alertService: AlertService,
    private usersService: UsersService,
    private router: Router
  ) {
    this.id = this.route.snapshot.queryParams.id;
    if (this.id) {
      this.isUpdate = true;
    }
  }

  ngOnInit(): void {
    this.getTitle();
    if (this.isUpdate) {
      this.getInfo();
    }
  }

  async getInfo() {
    try {
      const rs: any = await this.usersService.getInfo(this.id);
      if (rs.ok) {
        this.info = rs.rows;
      } else {
        this.alertService.error(rs.error);
      }
    } catch (error) {
      this.alertService.serverError();
    }
  }
  async getTitle() {
    try {
      const rs: any = await this.usersService.getTitle();
      if (rs.ok) {
        this.titleList = rs.rows;
      } else {
        this.alertService.error(rs.error);
      }
    } catch (error) {
      this.alertService.serverError();
    }
  }

  onClickSave() {
    if (this.isUpdate) {
      this.update();
    } else {
      this.save();
    }
  }

  async save() {
    try {
      const rs: any = await this.usersService.save(this.info);
      if (rs.ok) {
        this.alertService.success();
        this.router.navigateByUrl('/admin/users');
      } else {
        this.alertService.error(rs.error);
      }
    } catch (error) {
      this.alertService.serverError();
    }
  }

  async update() {
    try {
      const rs: any = await this.usersService.update(this.id, this.info);
      if (rs.ok) {
        this.alertService.success();
        this.router.navigateByUrl('/admin/users');
      } else {
        this.alertService.error(rs.error);
      }
    } catch (error) {
      this.alertService.serverError();
    }
  }
}
