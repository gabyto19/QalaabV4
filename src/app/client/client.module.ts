import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { DashboardComponent } from './dashboard-page/dashboard/dashboard.component';
import { ProfileComponent } from './dashboard-page/profile/profile.component';
import { TestCyclesComponent } from './projects/test-cycles/test-cycles.component';
import { IssuesComponent } from './projects/issues/issues.component';
import { TestCasesComponent } from './projects/test-cases/test-cases.component';


@NgModule({
  declarations: [
  
    CoursesPageComponent,
       DashboardPageComponent,
       DashboardComponent,
       ProfileComponent,
       TestCyclesComponent,
       IssuesComponent,
       TestCasesComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MatGridListModule,
  ]
})
export class ClientModule { }
