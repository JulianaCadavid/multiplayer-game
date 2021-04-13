/*import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';


@Injectable()
export class QuestionService{

    readonly rootUrl = 'http://localhost:3000/';
    qns = any[];
    seconds:number;
    timer;
    qnProgress: number;
    
    constructor(private http: HttpClient){}

    login(user:string){
        var body ={
            User: user
        }
    return this.http.post(this.rootUrl + 'api/login', body);
    }

    getQuestions(){
        return this.http.get(this.rootUrl + '/api/Questions');

    }
}*/