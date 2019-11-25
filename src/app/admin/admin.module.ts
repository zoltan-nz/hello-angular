import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [AdminDashboardComponent, AdminComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
