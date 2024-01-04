import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { BannerComponent } from './components/banner/banner.component';
import { OptionsComponent } from './components/options/options.component';
import { ContactComponent } from './components/contact/contact.component';
import { AgencyRoutingModule } from './agency-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { EllipsisModule } from 'src/app/global/generic-modules/ellipsis/ellipsis.module';



@NgModule({
  declarations: [
    MainComponent,
    BannerComponent,
    OptionsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AgencyRoutingModule,
    EllipsisModule,
    MatIconModule
  ]
})
export class AgencyModule { }
