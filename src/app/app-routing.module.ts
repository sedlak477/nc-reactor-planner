import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PassivePlannerComponent } from './passive-planner/passive-planner.component';
import { PassiveCoolersResolverService } from './resolver/passive-coolers-resolver.service';
import { FuelResolverService } from './resolver/fuel-resolver.service';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'passive-planner',
    component: PassivePlannerComponent,
    resolve: {
      passiveCoolers: PassiveCoolersResolverService,
      fuels: FuelResolverService,
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
