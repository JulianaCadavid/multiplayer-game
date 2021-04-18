import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MultiplayerGameService} from '../services/multiplayer-game.services';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  
  user="Juan";
  question="HOLA";
  constructor(private multiplayerGameService: MultiplayerGameService){
    multiplayerGameService.callback.subscribe(data=>{
      this.user=data.players[0].playerName;
      console.log(this.user)
    })
  }


  ngOnInit(): void {
 
  }



}

