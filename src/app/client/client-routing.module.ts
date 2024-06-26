import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { IssuesComponent } from './projects/issues/issues.component';
import { TestCyclesComponent } from './projects/test-cycles/test-cycles.component';
import { TestCasesComponent } from './projects/test-cases/test-cases.component';
import { TesterProfileComponent } from './profile/tester-profile/tester-profile.component';
import { TesterStatisticComponent } from './profile/tester-statistic/tester-statistic.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'courses', component: CoursesPageComponent },
  { path: 'issues', component: IssuesComponent },
  { path: 'test-cases', component: TestCasesComponent },
  { path: 'test-cycles', component: TestCyclesComponent },
  { path: 'tester-profile', component: TesterProfileComponent },
  { path: 'tester-statistic',component:TesterStatisticComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
