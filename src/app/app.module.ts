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
import { CurrencyPageComponent } from './pages/currency-page/currency-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PageNotFoundComponent } from './pages/not-found-page/page-not-found.component';
import { StoreAppModule } from './pages/store-app-page/store-app.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomePageComponent,
    MainNavigationBarComponent,
    CurrencyPageComponent,
    CurrencyInputComponent,
    CurrencyFormatDirective,
    TrackActivityDirective,
    LoginPageComponent,
    AdminPageComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    StoreAppModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MobxAngularModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
