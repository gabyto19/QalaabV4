import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterModalComponent } from './register-modal/register-modal.component';
import { FootModalsComponent } from './foot-modals/foot-modals.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SignModalComponent } from './sign-modal/sign-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    FooterComponent,
    RegisterModalComponent,
    FootModalsComponent,
    NavigationComponent,
    SignModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,
    MatGridListModule,
    NgbModule,
    NgbProgressbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
