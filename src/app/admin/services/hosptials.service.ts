import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HospitalsService {

  constructor(
    @Inject('API_URL') private apiUrl: any,
    private httpClient: HttpClient
  ) { }

  async getList(query: any) {
    const url = `${this.apiUrl}/admin/hospitals?query=${query}`;
    return await this.httpClient.get(url).toPromise();
  }

  async getInfo(id: any) {
    const url = `${this.apiUrl}/admin/hospitals/info?id=${id}`;
    return await this.httpClient.get(url).toPromise();
  }

  async update(id: any, data: any) {
    const url = `${this.apiUrl}/admin/hospitals?id=${id}`;
    return await this.httpClient.put(url, data).toPromise();
  }

  async remove(id: any) {
    const url = `${this.apiUrl}/admin/hospitals?id=${id}`;
    return await this.httpClient.delete(url).toPromise();
  }

  async save(data: any) {
    const url = `${this.apiUrl}/admin/hospitals`;
    return await this.httpClient.post(url, data).toPromise();
  }
}
