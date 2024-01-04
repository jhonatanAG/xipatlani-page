import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { ToursRoutingModule } from './tours-routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { ToursComponent } from './components/tours/tours.component';
import { DetailComponent } from './components/detail/detail.component';
import { PaginatorModule } from 'src/app/global/generic-modules/paginator/paginator.module';
import { EllipsisModule } from 'src/app/global/generic-modules/ellipsis/ellipsis.module';

@NgModule({
  declarations: [
    DestinationsComponent,
    BannerComponent,
    ToursComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    ToursRoutingModule,
    PaginatorModule,
    EllipsisModule
  ]
})
export class ToursModule { }
