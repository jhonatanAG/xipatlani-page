import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DestinyCard, DestinyDetail, Pagination, RespDestinations } from '../modules/agency/modules/tours/models/destiny.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  constructor(private http: HttpClient) { }

  getDestinatios(): Observable<DestinyCard[]> {
    return this.http.get<DestinyCard[]>(`${environment.apiXipatlani}/destinations/hermmes`);
    // return of(DESTINATIONS);
  }

  getDestinationsInfo(idDestiny: any, pagination: Pagination): Observable<RespDestinations> {
    return this.http.get<RespDestinations>(`${environment.apiXipatlani}/destinations/info/${idDestiny}?type=AGENCIES&page=${pagination.currentPage}&items=${pagination.itemsPerPage}`);
    // return of(DESTINATIONS_INFO);
  }

  getDestinyDetail(idDestiny: any): Observable<DestinyDetail> {
    return this.http.get<DestinyDetail>(`${environment.apiXipatlani}/destinations/detail/${idDestiny}`);
    // return of(DESTINY_DETAIL);
  }
}
