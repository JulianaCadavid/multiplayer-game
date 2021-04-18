import { Component, OnInit } from '@angular/core';
import { MultiplayerGameService } from '../services/multiplayer-game.services';
@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.scss']
})
export class SearchingComponent implements OnInit {

  constructor(private MultiplayerGameService: MultiplayerGameService){

  }

  ngOnInit(): void {
  }

  continue(){
    this.MultiplayerGameService.sendAnswer({
      playerName: "Juan",
      correct: true,
      time: 5
    });
  }
}
