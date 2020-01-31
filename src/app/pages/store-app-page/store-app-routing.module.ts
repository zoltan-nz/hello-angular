import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { StoreAppComponent } from './store-app.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const storeAppRoutes: Routes = [
  {
    path: 'store',
    component: StoreAppComponent,
    children: [
      { path: '', redirectTo: '/store/products', pathMatch: 'full' },
      { path: 'products', component: ProductListComponent },
      { path: 'products/new', component: ProductCreateComponent },
      { path: 'products/:id', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(storeAppRoutes)],
  exports: [RouterModule],
})
export class StoreAppRoutingModule {}
