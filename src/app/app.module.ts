import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MobxAngularModule } from 'mobx-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyInputComponent } from './components/currency-input/currency-input.component';
import { CurrencyFormatDirective } from './components/currency-input/directives/currency-format.directive';
import { MainNavigationBarComponent } from './components/main-navigation-bar/main-navigation-bar.component';
import { TrackActivityDirective } from './directives/track-activity.directive';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { CurrencyPageComponent } from './pages/currency-page/currency-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ProductCardComponent } from './pages/product-card/product-card.component';
import { ProductCreateComponent } from './pages/product-create/product-create.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    HomePageComponent,
    MainNavigationBarComponent,
    CurrencyPageComponent,
    CurrencyInputComponent,
    CurrencyFormatDirective,
    TrackActivityDirective,
    LoginPageComponent,
    AdminPageComponent,
    CartPageComponent,
    CategoriesPageComponent,
    CategoryPageComponent,
    ProductCardComponent,
    ProductCreateComponent,
    ProductDetailsComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MobxAngularModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
