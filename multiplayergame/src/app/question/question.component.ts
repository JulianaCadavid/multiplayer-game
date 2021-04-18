import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MultiplayerGameService} from '../services/multiplayer-game.services';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  
  user1="";
  user2="";
  question="HOLA";
  constructor(private multiplayerGameService: MultiplayerGameService){
    multiplayerGameService.callback.subscribe(data=>{
      this.user1=data.players[0].playerName;
      this.user2=data.players[1].playerName;
      console.log(data)
    })


    multiplayerGameService.callback1.subscribe(data=>{
      this.question=data.question.question;
      console.log(data)
    })


    multiplayerGameService.callback3.subscribe(data=>{
      console.log(data);
    })
  }


  ngOnInit(): void {
 
  }


  Prueba(){
    this.multiplayerGameService.sendAnswer({
       playerName: "Juan",
       time: 2,
       correct: true
    })
  }


}

