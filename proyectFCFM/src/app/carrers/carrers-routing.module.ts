import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrersPage } from './carrers.page';

const routes: Routes = [
  {
    path: '',
    component: CarrersPage
  },
  {
    path: 'carrers-detail',
    loadChildren: () => import('./carrers-detail/carrers-detail.module').then( m => m.CarrersDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrersPageRoutingModule {}
