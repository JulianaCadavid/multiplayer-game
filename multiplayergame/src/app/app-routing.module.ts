import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import { SearchingComponent } from './searching/searching.component';


const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'searching', component: SearchingComponent}

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
