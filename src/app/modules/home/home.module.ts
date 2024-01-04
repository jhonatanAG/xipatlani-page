import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ServicesDetailComponent } from './components/services-detail/services-detail.component';
import { EllipsisModule } from 'src/app/global/generic-modules/ellipsis/ellipsis.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent,
    AboutComponent,
    ServicesComponent,
    CarouselComponent,
    SuppliersComponent,
    ContactComponent,
    AboutUsComponent,
    ContactUsComponent,
    ServicesDetailComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    MatIconModule,
    EllipsisModule
  ]
})
export class HomeModule { }
