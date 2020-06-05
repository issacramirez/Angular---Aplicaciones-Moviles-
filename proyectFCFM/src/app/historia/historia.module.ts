import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoriaPageRoutingModule } from './historia-routing.module';

import { HistoriaPage } from './historia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoriaPageRoutingModule
  ],
  declarations: [HistoriaPage]
})
export class HistoriaPageModule {}
