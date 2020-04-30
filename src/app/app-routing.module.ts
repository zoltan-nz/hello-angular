import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_helpers/auth.guard';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { CurrencyPageComponent } from './pages/currency-page/currency-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PageNotFoundComponent } from './pages/not-found-page/page-not-found.component';
import { StoreAppComponent } from './pages/store-app-page/store-app.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomePageComponent },
  { path: 'store', component: StoreAppComponent },
  { path: 'currency-form', component: CurrencyPageComponent },
  { path: 'admin', component: AdminPageComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginPageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes /*, { enableTracing: true }*/)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
