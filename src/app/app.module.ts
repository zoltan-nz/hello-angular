import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/not-found-page/page-not-found.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MainNavigationBarComponent } from './components/main-navigation-bar/main-navigation-bar.component';
import { StoreAppModule } from './pages/store-app-page/store-app.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminModule } from './pages/admin-page/admin.module';
import { LoginModule } from './pages/login-page/login.module';
import { CurrencyPageComponent } from './pages/currency-page/currency-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomePageComponent,
    MainNavigationBarComponent,
    CurrencyPageComponent,
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
