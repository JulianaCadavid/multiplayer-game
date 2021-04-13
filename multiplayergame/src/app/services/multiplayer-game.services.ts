import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserGame} from '../models/multiplayer-game.models';
import { Socket } from 'ngx-socket-io';


@Injectable({
    providedIn: 'root'
})
export class MultiplayerGameService extends Socket{

    constructor(){
     super({url: 'https://triviador-backend.herokuapp.com/'},
     )
     this.ioSocket.on("sendQuestion",(question: object)=>{
        console.log(question)
    })
    }

    searchGame=(user: object)=>{
        this.ioSocket.emit("searchGame", user);
    }
   
   
    

}