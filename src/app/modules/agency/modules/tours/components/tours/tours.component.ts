import { Component, OnInit } from '@angular/core';
import { DestinyInfo, Pagination } from '../../models/destiny.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ToursService } from 'src/app/services/tours.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent implements OnInit {
  private destinyId: string;

  public destinyName: string;

  public tours: DestinyInfo[] = [];

  public pagination: Pagination = {
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 0,
    totalPages: 0
  };

  public loadInfo = true;

  constructor(private router: Router, private destinyService: ToursService, private route: ActivatedRoute) {
    this.destinyId = this.route.snapshot.paramMap.get('id') || '';
    if (this.destinyId == '') {
      this.router.navigate(['destinations']);
    }
    this.destinyName = localStorage.getItem('destinyName') || '';
  }

  ngOnInit(): void {
    this.getDestinations();
  }

  goDestiny(id: any): void {
    this.router.navigate(['agency/tours/detail/' + id]);
  }

  changePagination(pagination: Pagination): void {
    this.pagination = pagination;
    this.getDestinations();
  }

  getDestinations(): void {
    this.loadInfo = true;
    this.destinyService.getDestinationsInfo(this.destinyId, this.pagination).subscribe(data => {
      this.pagination = data.pagination;
      this.tours = data.destinationInfo;
      this.loadInfo = false;
    }, err => {
      console.error(err);
      this.loadInfo = false;
    });
  }

}
