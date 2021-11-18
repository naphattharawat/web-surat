import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    @Inject('API_URL') private apiUrl: any,
    private httpClient: HttpClient
  ) { }

  async login(username: string, password: string) {
    const url = `${this.apiUrl}/login`;
    return await this.httpClient.post(url, {
      username: username,
      password: password
    }).toPromise();
  }
}
