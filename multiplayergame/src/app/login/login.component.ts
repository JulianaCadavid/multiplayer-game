import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MultiplayerGameService } from '../services/multiplayer-game.services';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  constructor(private MultiplayerGameService: MultiplayerGameService){

  }

  @Output() event = new EventEmitter<object>();
   user= {};

  loginUser(){
    console.log(this.user);
    this.MultiplayerGameService.searchGame(this.user);
  }

  



}




