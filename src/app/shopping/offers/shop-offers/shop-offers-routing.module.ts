import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopOffersPage } from './shop-offers.page';

const routes: Routes = [
  {
    path: '',
    component: ShopOffersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopOffersPageRoutingModule {}
