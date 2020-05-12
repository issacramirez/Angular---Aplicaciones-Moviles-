import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrersDetailPage } from './carrers-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CarrersDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrersDetailPageRoutingModule {}
