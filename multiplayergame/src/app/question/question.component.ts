import { Component, OnInit, Input } from '@angular/core';
import { MultiplayerGameService } from '../services/multiplayer-game.services';
import { CountdownModule } from 'ngx-countdown';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  user={};
  question={};
 constructor(private MultiplayerGameService: MultiplayerGameService ) { 
   
  this.MultiplayerGameService.callback.subscribe(question=>{
    console.log(question)
   })
  this.MultiplayerGameService.searchGame(this.user)
  }

  ngOnInit(): void{
    
  }



}

