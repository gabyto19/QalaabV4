import { Component } from '@angular/core';

@Component({
  selector: 'app-tester-profile',
  templateUrl: './tester-profile.component.html',
  styleUrls: ['./tester-profile.component.css']
})
export class TesterProfileComponent {
  dashOption = 'personal'
  chooseDashboard(text: any) {
    this.dashOption = text;
  }
}
