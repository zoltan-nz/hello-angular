import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreAppComponent } from './store-app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [StoreAppComponent],
  imports: [RouterModule, CommonModule],
  exports: [StoreAppComponent],
})
export class StoreAppModule {}
