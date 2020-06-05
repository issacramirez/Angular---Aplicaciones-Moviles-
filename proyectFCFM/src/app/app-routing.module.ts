import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'carrers',
    children: [
      {
        path: '', loadChildren: () => import('./carrers/carrers.module').then( m => m.CarrersPageModule)
      },
      {
        path: ':carrerId',
        loadChildren: () => import('./carrers/carrers-detail/carrers-detail.module').then(m => m.CarrersDetailPageModule)
      }
    ]
  },  {
    path: 'ubicacion',
    loadChildren: () => import('./ubicacion/ubicacion.module').then( m => m.UbicacionPageModule)
  },
  {
    path: 'historia',
    loadChildren: () => import('./historia/historia.module').then( m => m.HistoriaPageModule)
  },
  {
    path: 'reglamento',
    loadChildren: () => import('./reglamento/reglamento.module').then( m => m.ReglamentoPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
