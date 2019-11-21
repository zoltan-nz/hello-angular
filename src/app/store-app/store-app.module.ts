import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreAppComponent } from './store-app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductCardComponent } from './product-card/product-card.component';
import { StoreAppRoutingModule } from './store-app-routing.module';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    StoreAppComponent,
    TopBarComponent,
    ProductListComponent,
    CartComponent,
    ProductCardComponent,
    ProductCreateComponent,
    ProductDetailsComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, StoreAppRoutingModule, FontAwesomeModule, HttpClientModule],
  exports: [StoreAppComponent],
})
export class StoreAppModule {}
