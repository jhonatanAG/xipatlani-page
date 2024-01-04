import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./components/main/main.component";
import { NgModule } from "@angular/core";
import { AuthGuard } from "src/app/guards/auth.guard";

const routes: Routes = [
  { path: '', component: MainComponent, canActivate: [AuthGuard] },
  { path: 'tours', loadChildren: () => import('./modules/tours/tours.module').then(m => m.ToursModule), canActivate: [AuthGuard] },
  { path: 'cars', loadChildren: () => import('./modules/cars/cars.module').then(m => m.CarsModule), canActivate: [AuthGuard] },
  { path: 'account', loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule), canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgencyRoutingModule { }
