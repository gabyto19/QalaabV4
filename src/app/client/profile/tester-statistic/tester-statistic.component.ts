import { Component } from '@angular/core';

@Component({
  selector: 'app-tester-statistic',
  templateUrl: './tester-statistic.component.html',
  styleUrls: ['./tester-statistic.component.css']
})
export class TesterStatisticComponent {
  dashOption = 'about'
  chooseDashboard(text: any) {
    this.dashOption = text;
  }
}
