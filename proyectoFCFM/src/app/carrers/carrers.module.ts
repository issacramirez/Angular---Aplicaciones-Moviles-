import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrersPageRoutingModule } from './carrers-routing.module';

import { CarrersPage } from './carrers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarrersPageRoutingModule
  ],
  declarations: [CarrersPage]
})
export class CarrersPageModule {}
