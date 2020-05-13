import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopOffersPageRoutingModule } from './shop-offers-routing.module';

import { ShopOffersPage } from './shop-offers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopOffersPageRoutingModule
  ],
  declarations: [ShopOffersPage]
})
export class ShopOffersPageModule {}
