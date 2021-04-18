import { Component, OnInit } from '@angular/core';
import { MultiplayerGameService } from '../services/multiplayer-game.services';
@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.scss']
})
export class SearchingComponent implements OnInit {

  user1="";
  user2="";
  constructor(private multiplayerGameService: MultiplayerGameService){
    multiplayerGameService.callback.subscribe(data=>{
      this.user1=data.players[0].playerName;
      this.user2=data.players[1].playerName;
    })
  }

  ngOnInit(): void {
  }

  continue(){
    this.multiplayerGameService.sendAnswer({
      playerName: "Juan",
      correct: true,
      time: 5
    });
  }
}
