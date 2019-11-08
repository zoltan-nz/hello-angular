import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainNavigationBarComponent } from './main-navigation-bar/main-navigation-bar.component';
import { StoreAppModule } from './store-app/store-app.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, HomePageComponent, MainNavigationBarComponent],
  imports: [AppRoutingModule, BrowserModule, StoreAppModule, BrowserAnimationsModule, CollapseModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
