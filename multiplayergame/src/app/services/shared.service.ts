import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class SharedService{
    user={}
    constructor(){}

    setUser(user:any){
        this.user=user;
    }

    getUser(){
        return this.user
    }
   
}