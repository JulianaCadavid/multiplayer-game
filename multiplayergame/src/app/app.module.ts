import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SearchingComponent } from './searching/searching.component';
import {FormsModule} from '@angular/forms';
import { QuestionComponent } from './question/question.component';
import {CountdownModule} from 'ngx-countdown';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchingComponent,
    QuestionComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FlexLayoutModule, 
    BrowserAnimationsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule, 
    MatCardModule, 
    MatToolbarModule, 
    MatProgressSpinnerModule, 
    FormsModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
