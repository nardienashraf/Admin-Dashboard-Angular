import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _loginUrl = `${environment.APIURL}/admin/login`;

  constructor(private http: HttpClient) {}

  loginAdmin(admin: any) {
    return this.http.post<any>(this._loginUrl, admin);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
