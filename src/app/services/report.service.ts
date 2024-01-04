import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ReportPagination } from '../modules/agency/modules/account/models/reports.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private baseUrl = `${environment.apiXipatlani}/reports`

  constructor(private http: HttpClient) { }

  getReportsByNumClient(client: string): Observable<ReportPagination> {
    return this.http.get<ReportPagination>(`${this.baseUrl}?client=${client}`);
  }

  getReportsByPeriod(client: string, month: string, year: number) {
    return this.http.get<ReportPagination>(`${this.baseUrl}?client=${client}&month=${month}&year=${year}`);
  }
}
