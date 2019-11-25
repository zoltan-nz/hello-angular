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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, HomePageComponent, MainNavigationBarComponent],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    StoreAppModule,
    BrowserAnimationsModule,
    CollapseModule,
    AppRoutingModule,
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
