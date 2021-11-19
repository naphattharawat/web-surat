import { Router } from '@angular/router';
import { AlertService } from './../../services/alert.service';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  list: any = [];
  query = '';
  loading = false;
  constructor(
    private usersService: UsersService,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  onKeyEnter(e: any) {
    if (e.keyCode == 13) {
      this.getList();
    }
  }

  async getList() {
    try {
      this.loading =true;
      const rs: any = await this.usersService.getList(this.query);
      if (rs.ok) {
        this.list = rs.rows
      } else {
        this.alertService.error(rs.error);
      }
      this.loading =false;
    } catch (error) {
      this.loading =false;
      this.alertService.serverError();
    }
  }

  async onClickRemove(id: any) {
    try {
      const confirm = await this.alertService.remove();
      if (confirm.isConfirmed) {
        const rs: any = await this.usersService.remove(id);
        if (rs.ok) {
          const idx = _.findIndex(this.list, { id: id });
          if (idx > -1) {
            this.list.splice(idx, 1);
          }
        } else {
          this.alertService.error(rs.error);
        }
      }
    } catch (error) {
      this.alertService.serverError();
    }
  }

  onClickEdit(id: any) {
    this.router.navigate(['/admin/users/details'], { queryParams: { 'id': id } });
  }
}
