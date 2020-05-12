import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrersDetailPageRoutingModule } from './carrers-detail-routing.module';

import { CarrersDetailPage } from './carrers-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarrersDetailPageRoutingModule
  ],
  declarations: [CarrersDetailPage]
})
export class CarrersDetailPageModule {}
