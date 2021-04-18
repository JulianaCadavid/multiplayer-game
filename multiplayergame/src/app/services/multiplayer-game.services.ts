import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserGame } from '../models/multiplayer-game.models';
import { Socket } from 'ngx-socket-io';
import { EventEmitter } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class MultiplayerGameService extends Socket {
    callback: EventEmitter<any> = new EventEmitter();
    callback1: EventEmitter<any> = new EventEmitter();
    callback3: EventEmitter<any> = new EventEmitter();
    constructor() {
        super({ url: 'https://triviador-backend.herokuapp.com/' },
        )
        this.ioSocket.on("startGame", (question: object) => {
            this.callback.emit(question);
        })

        this.ioSocket.on("sendQuestion", (question: object) => {
            this.callback1.emit(question);
        })


        this.ioSocket.on("sendPoints", (dataPoint: object) => {
            this.callback3.emit(dataPoint);
        })

        this.ioSocket.on("endGame", () => {
            console.log("Fin")
        })
    }

    searchGame = (user: object) => {
        this.ioSocket.emit("searchGame", user);
    }


    sendAnswer = (dataPoint: object) => {
        this.ioSocket.emit("answer", dataPoint);
    }




}