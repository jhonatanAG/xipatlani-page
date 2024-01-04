import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BasicResponse } from '../models/general.model';
import { Password, User } from '../modules/agency/modules/account/models/account.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsersByClient(idClient: number): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiXipatlani}/user/external/get-all-by-clients/${idClient}`);
  }

  addUser(user: User): Observable<BasicResponse> {
    return this.http.post<BasicResponse>(`${environment.apiXipatlani}/user/external/add`, user);
  }

  updateUser(user: User): Observable<BasicResponse> {
    return this.http.put<BasicResponse>(`${environment.apiXipatlani}/external/user/update/${user.id}`, user);
  }

  deleteUser(idUser: number): Observable<BasicResponse> {
    return this.http.delete<BasicResponse>(`${environment.apiXipatlani}/user/external/delete/${idUser}`);
  }

  changePassword(password: Password): Observable<BasicResponse> {
    return this.http.put<BasicResponse>(`${environment.apiXipatlani}/user/external/update-password`, password);
  }
}
