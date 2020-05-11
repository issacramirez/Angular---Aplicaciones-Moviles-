import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrerDetailPageRoutingModule } from './carrer-detail-routing.module';

import { CarrerDetailPage } from './carrer-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarrerDetailPageRoutingModule
  ],
  declarations: [CarrerDetailPage]
})
export class CarrerDetailPageModule {}
