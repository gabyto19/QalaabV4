import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QalaabV4';
  selected = 'dashboard';
  fromWelcome: string ='true';

  onVariableChanged(variable: string) {
    this.fromWelcome = variable;
  }
}
