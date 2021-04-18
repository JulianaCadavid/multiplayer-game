import { Component, OnInit, Input, Output } from '@angular/core';
import { LoginComponent} from '../login/login.component';
import { MultiplayerGameService} from '../services/multiplayer-game.services';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.scss']
})
export class SearchingComponent implements OnInit {

 @Input() 
  user= {};

  constructor(private MultiplayerGameService: MultiplayerGameService) { }
  

  ngOnInit() {
    this.MultiplayerGameService.searchGame(this.user);
  }

  continue(){
 }
}
