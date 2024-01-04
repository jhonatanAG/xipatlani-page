import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { DestinationsComponent } from "./components/destinations/destinations.component";
import { ToursComponent } from "./components/tours/tours.component";
import { DetailComponent } from "./components/detail/detail.component";

const routes: Routes = [
  { path: '', redirectTo: 'destinations', pathMatch: 'full' },
  { path: 'destinations', component: DestinationsComponent },
  { path: ':id', component: ToursComponent },
  { path: 'detail/:id', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToursRoutingModule { }