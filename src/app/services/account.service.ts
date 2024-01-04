import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../modules/agency/modules/account/models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAccountInfo(): Observable<Client> {
    return this.http.get<Client>(`${environment.apiXipatlani}/external/get-info`);
  }
}
