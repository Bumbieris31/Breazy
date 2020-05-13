import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffersPage } from './offers.page';

const routes: Routes = [
  {
    path: '',
    component: OffersPage
  },
  {
    path: 'category-item',
    loadChildren: () => import('./category-item/category-item.module').then( m => m.CategoryItemPageModule)
  },
  {
    path: 'shop-offers',
    loadChildren: () => import('./shop-offers/shop-offers.module').then( m => m.ShopOffersPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffersPageRoutingModule {}
