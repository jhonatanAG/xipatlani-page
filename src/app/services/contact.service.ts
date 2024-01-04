import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Contact {
  applicant: string;
  contact: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendToPanel(data: Contact): Observable<any> {
    return this.http.post<any>(`${environment.apiXipatlani}/requests/add`, data);
  }

}
