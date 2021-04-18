import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import { QuestionComponent } from './question/question.component';
import { SearchingComponent } from './searching/searching.component';
import {ResultsComponent} from './results/results.component';


const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'searching', component: SearchingComponent},
  {path: 'questions', component: QuestionComponent}, 
  {path: 'results', component: ResultsComponent }

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
