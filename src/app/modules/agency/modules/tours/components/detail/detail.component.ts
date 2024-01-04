import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToursService } from 'src/app/services/tours.service';
import { DestinyDetail } from '../../models/destiny.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  public currenURL: string;
  private destinyId: string;

  public destiny!: DestinyDetail;

  public loadInfo = true;

  constructor(private toursService: ToursService, private route: ActivatedRoute, private router: Router) {
    this.currenURL = window.location.href;
    this.destinyId = this.route.snapshot.paramMap.get('id') || '';
    if (this.destinyId == '') {
      this.router.navigate(['agency/tours']);
    }
  }

  ngOnInit(): void {
    this.getDestinyDetail();
  }

  getDestinyDetail(): void {
    this.toursService.getDestinyDetail(this.destinyId).subscribe(data => {
      this.destiny = data;
      this.loadInfo = false;
    }, err => {
      console.error(err);
      this.loadInfo = false;
    });
  }
}
