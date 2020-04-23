import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartComponent } from './cart/cart.component';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StoreAppRoutingModule } from './store-app-routing.module';
import { StoreAppComponent } from './store-app.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    ProductListComponent,
    StoreAppComponent,
    TopBarComponent,
    CartComponent,
    ProductCardComponent,
    ProductCreateComponent,
    ProductDetailsComponent,
    CategoriesPageComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, StoreAppRoutingModule, FontAwesomeModule, HttpClientModule],
  exports: [StoreAppComponent],
})
export class StoreAppModule {}
