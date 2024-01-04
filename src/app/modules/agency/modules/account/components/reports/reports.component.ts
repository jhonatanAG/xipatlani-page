import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { ReportService } from 'src/app/services/report.service';
import { UtilService } from 'src/app/services/util.service';
import Swal from 'sweetalert2';
import { Client } from '../../models/account.model';
import { ReportPagination } from '../../models/reports.model';
import { Pagination } from 'src/app/global/generic-modules/paginator/paginator.component';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  public client: Client | undefined;
  public reportPagination: ReportPagination | undefined;
  public monthsList: string[];
  public monthSelected: string;
  public yearsList: number[];
  public yearSelected: number;

  public pagination: Pagination = {
    itemsPerPage: 10,
    totalItems: 0,
    totalPages: 0,
    currentPage: 1
  }

  constructor(
    private accountService: AccountService,
    private reportService: ReportService,
    private utilService: UtilService
  ) {

    this.monthSelected = utilService.getActualMonth();
    this.monthsList = utilService.getMonthList();
    this.yearSelected = new Date().getFullYear();
    this.yearsList = this.getListYears();

  }

  ngOnInit(): void {
    this.getInformation();
  }

  getInformation() {
    this.client = undefined;
    this.accountService.getAccountInfo().subscribe(data => {
      this.client = data;
      this.getReports();
    }, err => {
      console.error(err);
      Swal.fire('Error', 'error al cargar cliente', 'error');
    });
  }

  getReports() {
    this.reportPagination = undefined;
    if (this.client) {
      this.reportService.getReportsByNumClient(this.client.idIcaav).subscribe(data => {
        this.reportPagination = data;
      }, err => {
        console.error(err);
        Swal.fire('Error', 'error al cargar cliente', 'error');
      })
    } else {
      this.getInformation();
    }
  }

  searhReports() {
    this.reportPagination = undefined;
    if (this.client) {
      this.reportService.getReportsByPeriod(this.client.idIcaav, this.monthSelected, this.yearSelected).subscribe(data => {
        this.reportPagination = data;
      }, err => {
        console.error(err);
        Swal.fire('Error', 'error al cargar reportes', 'error');
      })
    } else {
      this.getInformation();
    }
  }

  changePagePagination(newPagination: Pagination) {
    this.pagination = newPagination;
    this.getReports();
  }

  getListYears(): number[] {
    let baseYear = 2022;
    let actualYear = new Date().getFullYear();
    let yearsList: number[] = [];

    for (let year = baseYear; year <= actualYear; year++) {
      yearsList.push(year);
    }

    return yearsList;
  }

}
