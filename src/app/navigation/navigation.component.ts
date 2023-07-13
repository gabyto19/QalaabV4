import { Component, EventEmitter, Output } from '@angular/core';
import { SignModalComponent } from '../sign-modal/sign-modal.component';
import { RegisterModalComponent } from '../register-modal/register-modal.component';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']

})
export class NavigationComponent {
  @Output() variableChanged: EventEmitter<string> = new EventEmitter<string>();

  sendVariable(answer: any) {
    const variableToSend = answer;
    this.variableChanged.emit(variableToSend);
  }
  constructor(private matDialog: MatDialog) { }

  selected = 0;

  openDialog() {
    this.matDialog.open(SignModalComponent, {
      width: '550px',

    });
  }
  openRegister() {
    this.matDialog.open(RegisterModalComponent, {
      width: '550px',
    });
  }


}
