import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreAppComponent } from './store-app.component';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { CartComponent } from './cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StoreAppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductAlertComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'store',
        component: StoreAppComponent,
        children: [
          { path: '', redirectTo: '/store/products', pathMatch: 'full' },
          {
            path: 'products',
            component: ProductListComponent,
            children: [{ path: 'products/:productId', component: ProductDetailsComponent }],
          },
          { path: 'cart', component: CartComponent },
        ],
      },
    ]),
  ],
  exports: [StoreAppComponent],
})
export class StoreAppModule {}
