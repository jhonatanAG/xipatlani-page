import { Component, OnInit } from '@angular/core';
import { ToursService } from 'src/app/services/tours.service';
import { DestinyCard } from '../../models/destiny.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {

  public load = true;
  public destinations: DestinyCard[] = [];

  constructor(private toursService: ToursService, private router: Router) { }
  ngOnInit(): void {
    this.getDestinations();
  }

  getDestinations(): void {
    this.toursService.getDestinatios().subscribe(data => {
      this.destinations = data;
      this.load = false;
    }, err => {
      console.error(err);
      this.load = false;
    });
  }

  goDestiny(id: any, name: string): void {
    localStorage.setItem('destinyName', name)
    this.router.navigate(['agency/tours/' + id]);
  }
}
