import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    @Inject('API_URL') private apiUrl: any,
    private httpClient: HttpClient
  ) { }

  async getList(query: any) {
    const url = `${this.apiUrl}/admin/users?query=${query}`;
    return await this.httpClient.get(url).toPromise();
  }

  async getInfo(id: any) {
    const url = `${this.apiUrl}/admin/users/info?id=${id}`;
    return await this.httpClient.get(url).toPromise();
  }

  async update(id: any, data: any) {
    const url = `${this.apiUrl}/admin/users/${id}`;
    return await this.httpClient.put(url, data).toPromise();
  }

  async remove(id: any) {
    const url = `${this.apiUrl}/admin/users/${id}`;
    return await this.httpClient.delete(url).toPromise();
  }

  async save(data: any) {
    const url = `${this.apiUrl}/admin/users`;
    return await this.httpClient.post(url, data).toPromise();
  }
  async getTitle() {
    const url = `${this.apiUrl}/admin/titles`;
    return await this.httpClient.get(url).toPromise();
  }
}
