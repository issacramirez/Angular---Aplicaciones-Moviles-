import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReglamentoPage } from './reglamento.page';

const routes: Routes = [
  {
    path: '',
    component: ReglamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReglamentoPageRoutingModule {}
