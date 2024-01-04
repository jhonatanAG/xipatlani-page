import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MainComponent } from './components/main/main.component';
import { UsersComponent } from './components/users/users.component';
import { ReportsComponent } from './components/reports/reports.component';
import { AccountRoutingModule } from './account-routing.module';
import { InfoComponent } from './components/info/info.component';
import { UserModalComponent } from './components/user-modal/user-modal.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { EllipsisModule } from 'src/app/global/generic-modules/ellipsis/ellipsis.module';
import { PaginatorModule } from 'src/app/global/generic-modules/paginator/paginator.module';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [
    MainComponent,
    UsersComponent,
    ReportsComponent,
    InfoComponent,
    UserModalComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MatTabsModule,
    EllipsisModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    PaginatorModule
  ],
  //entryComponents:[UserModalComponent]
})
export class AccountModule { }
