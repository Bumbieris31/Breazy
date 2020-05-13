import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingPage } from './shopping.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: ShoppingPage,
    children: [
      {
        path: 'offers',
        children: [
          {
            path: '',
            loadChildren: () => import('./offers/offers.module').then(m => m.OffersPageModule)
          },
          {
            path: ':categoryId',
            loadChildren: () => import('./offers/category-item/category-item.module').then(m => m.CategoryItemPageModule)
          },
          {
            path: ':shopId',
            loadChildren: () => import('./offers/shop-offers/shop-offers.module').then(m => m.ShopOffersPageModule)
          },
          {
            path: 'item/:itemId',
            loadChildren: () => import('./offers/item/item.module').then(m => m.ItemPageModule)
          }
        ]
      },
      {
        path: 'cart',
        loadChildren: () => import('./cart/cart.module').then(m => m.CartPageModule)
      },
      {
        path: '',
        redirectTo: '/shopping/tabs/offers',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/shopping/tabs/offers',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingPageRoutingModule { }
