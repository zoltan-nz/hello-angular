import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreAppComponent } from './store-app.component';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';

@NgModule({
  declarations: [
    StoreAppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductAlertComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'store',
        component: StoreAppComponent,
        children: [
          {
            path: '',
            component: ProductListComponent,
            children: [{ path: ':id', component: ProductDetailsComponent }],
          },
        ],
      },
    ]),
  ],
  exports: [StoreAppComponent],
})
export class StoreAppModule {}
