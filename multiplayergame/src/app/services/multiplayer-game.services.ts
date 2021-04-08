import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserGame} from '../models/multiplayer-game.models';

@Injectable({
    providedIn: 'root'
})
export class MultiplayerGameService{

    private URL= 'http://localhost:3000/multiplayergame'

}