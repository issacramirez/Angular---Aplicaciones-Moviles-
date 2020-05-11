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
        loadChildren: () => import('./carrers/carrer-detail/carrer-detail.module').then(m => m.CarrerDetailPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
