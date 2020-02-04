import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CollapseModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavigationBarComponent } from './components/main-navigation-bar/main-navigation-bar.component';
import { AdminModule } from './pages/admin-page/admin.module';
import { CurrencyPageComponent } from './pages/currency-page/currency-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginModule } from './pages/login-page/login.module';
import { PageNotFoundComponent } from './pages/not-found-page/page-not-found.component';
import { StoreAppModule } from './pages/store-app-page/store-app.module';
import { CurrencyInputComponent } from './components/currency-input/currency-input.component';
import { CurrencyFormatDirective } from './directives/currency-format.directive';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomePageComponent,
    MainNavigationBarComponent,
    CurrencyPageComponent,
    CurrencyInputComponent,
    CurrencyFormatDirective,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    StoreAppModule,
    BrowserAnimationsModule,
    CollapseModule,
    AppRoutingModule,
    AdminModule,
    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
