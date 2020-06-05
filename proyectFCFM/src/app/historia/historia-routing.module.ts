import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoriaPage } from './historia.page';

const routes: Routes = [
  {
    path: '',
    component: HistoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoriaPageRoutingModule {}
