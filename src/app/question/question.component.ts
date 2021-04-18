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
  question="";
  answer1="";
  answer2="";
  answer3="";
  answer4="";
  point1="";
  point2="";
  constructor(private multiplayerGameService: MultiplayerGameService){
    multiplayerGameService.callback.subscribe(data=>{
      this.user1=data.players[0].playerName;
      this.user2=data.players[1].playerName;
      this.question=data.question.question;
      this.answer1=data.question.incorrect_answers[0];
      this.answer2=data.question.incorrect_answers[1];
      this.answer3=data.question.incorrect_answers[2];
      this.answer4=data.question.correct_answer;
      console.log(data)
    })


    multiplayerGameService.callback1.subscribe(data=>{
      //this.point1=data.players[0].points;
      //this.point2=data.players[1].points;
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

  verify(){
    this.multiplayerGameService.sendAnswer({
      playerName: this.user1, 
      time: 2,
      correct: true
    })
  }


}