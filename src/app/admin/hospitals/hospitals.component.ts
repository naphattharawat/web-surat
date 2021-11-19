import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { HospitalsService } from '../services/hosptials.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css']
})
export class HospitalsComponent implements OnInit {

  list: any = [];
  query = '';
  loading = false;
  modal = false;
  hospcode: any;
  hospname: any;
  id: any;
  isUpdate = false;
  constructor(
    private hospitalsService: HospitalsService,
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
      this.loading = true;
      const rs: any = await this.hospitalsService.getList(this.query);
      if (rs.ok) {
        this.list = rs.rows
      } else {
        this.alertService.error(rs.error);
      }
      this.loading = false;
    } catch (error) {
      this.loading = false;
      this.alertService.serverError();
    }
  }

  async onClickRemove(id: any) {
    try {
      const confirm = await this.alertService.remove();
      if (confirm.isConfirmed) {
        const rs: any = await this.hospitalsService.remove(id);
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

  onClickEdit(i: any) {
    this.id = i.id;
    this.hospcode = i.hospcode;
    this.hospname = i.hospname;
    this.modal = true;
    this.isUpdate = true;
  }

  onClickAdd() {
    this.hospcode = '';
    this.hospname = '';
    this.isUpdate = false;
    this.modal = true;
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
      const obj: any = {
        hospcode: this.hospcode,
        hospname: this.hospname
      }
      const rs: any = await this.hospitalsService.save(obj);
      if (rs.ok) {
        this.modal = false;
        this.getList();
        this.alertService.success();
      } else {
        this.alertService.error(rs.error);
      }
    } catch (error) {
      this.alertService.serverError();
    }
  }

  async update() {
    try {
      const obj: any = {
        hospcode: this.hospcode,
        hospname: this.hospname
      }
      const rs: any = await this.hospitalsService.update(this.id, obj);
      if (rs.ok) {
        this.modal = false;
        this.getList();
        this.alertService.success();
      } else {
        this.alertService.error(rs.error);
      }
    } catch (error) {
      this.alertService.serverError();
    }
  }
}
