import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { IssuesComponent } from './projects/issues/issues.component';
import { TestCyclesComponent } from './projects/test-cycles/test-cycles.component';
import { TestCasesComponent } from './projects/test-cases/test-cases.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardPageComponent},
  {path:'courses',component:CoursesPageComponent},
  {path:'issues',component:IssuesComponent},
  {path:'test-cases',component:TestCyclesComponent},
  { path :'test-cycles' ,component:TestCyclesComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
