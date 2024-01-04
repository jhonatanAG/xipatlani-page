import { Injectable } from '@angular/core';
import { UserLogged } from '../models/auth.model';
import { Observable, of } from 'rxjs';
import { USER_AUTH } from '../mocks/auth.mock';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { LSKeys } from '../global/keys';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged = false;

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string): Observable<UserLogged> {
    return this.http.post<UserLogged>(`${environment.apiXipatlani}/external/login`, { email, password });
  }

  isAuthenticated(): boolean {
    this.isLogged = false;
    const jwtService = new JwtHelperService();
    let token = localStorage.getItem(LSKeys.auth_token)
    if (token != null && token != '') {
      this.isLogged = !jwtService.isTokenExpired(token);
      return this.isLogged;
    }
    return false;
  }

  logout() {
    localStorage.removeItem(LSKeys.auth_token);
    this.router.navigate(['login']);
  }

  getCurrentUser(): UserLogged {
    let token = localStorage.getItem('usr-ext')
    const userLog: UserLogged = JSON.parse(token ? token : '{}');
    if (!userLog.user) {
      this.router.navigate(['login']);
    }
    return userLog;
  }

}
