import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

import { ClientRoutingModule } from './client-routing.module';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { DashboardComponent } from './dashboard-page/dashboard/dashboard.component';
import { ProfileComponent } from './dashboard-page/profile/profile.component';
import { TestCyclesComponent } from './projects/test-cycles/test-cycles.component';
import { IssuesComponent } from './projects/issues/issues.component';
import { TestCasesComponent } from './projects/test-cases/test-cases.component';
import { TesterProfileComponent } from './profile/tester-profile/tester-profile.component';
import { PersonalComponent } from './profile/tester-profile/personal/personal.component';
import { DevicesComponent } from './profile/tester-profile/devices/devices.component';
import { PaySubComponent } from './profile/tester-profile/pay-sub/pay-sub.component';
import { StatisticComponent } from './profile/tester-profile/statistic/statistic.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { TesterStatisticComponent } from './profile/tester-statistic/tester-statistic.component';
import { AboutComponent } from './profile/tester-statistic/about/about.component';



@NgModule({
  declarations: [

    CoursesPageComponent,
    DashboardPageComponent,
    DashboardComponent,
    ProfileComponent,
    TestCyclesComponent,
    IssuesComponent,
    TestCasesComponent,
    TesterProfileComponent,
    PersonalComponent,
    DevicesComponent,
    PaySubComponent,
    StatisticComponent,
    TesterStatisticComponent,
    AboutComponent
  ],
  imports: [
    NgApexchartsModule,
    CanvasJSAngularChartsModule,
    CommonModule,
    ClientRoutingModule,
    MatGridListModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatDatepickerModule, 
    MatNativeDateModule,
  ]
})
export class ClientModule { }
