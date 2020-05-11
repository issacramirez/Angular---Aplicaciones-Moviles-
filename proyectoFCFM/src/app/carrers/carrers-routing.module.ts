import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrersPage } from './carrers.page';

const routes: Routes = [
  {
    path: '',
    component: CarrersPage
  },
  {
    path: 'carrer-detail',
    loadChildren: () => import('./carrer-detail/carrer-detail.module').then( m => m.CarrerDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrersPageRoutingModule {}
