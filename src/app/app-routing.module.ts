import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PassivePlannerComponent } from './passive-planner/passive-planner.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'passive-planner',
    component: PassivePlannerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
