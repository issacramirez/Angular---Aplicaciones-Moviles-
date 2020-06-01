import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UbicacionPage } from './ubicacion.page';

const routes: Routes = [
  {
    path: '',
    component: UbicacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UbicacionPageRoutingModule {}
