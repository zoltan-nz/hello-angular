import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreAppComponent } from './store-app.component';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [StoreAppComponent, TopBarComponent, ProductListComponent, CartComponent, ProductCardComponent],
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
          },
          { path: 'cart', component: CartComponent },
        ],
      },
    ]),
    FontAwesomeModule,
  ],
  exports: [StoreAppComponent],
})
export class StoreAppModule {}
