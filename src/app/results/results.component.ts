import { Component, OnInit } from '@angular/core';
import { MultiplayerGameService } from '../services/multiplayer-game.services';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  user="";
  points="";
  constructor(private multiplayerService: MultiplayerGameService ) { 
    
  }

  ngOnInit(): void {
  }

}
