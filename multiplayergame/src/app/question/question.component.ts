import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { QuestionService } from '../services/question.services';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

 
 //77 constructor(private router:Router, private questionService: QuestionService) {  }

  ngOnInit(): void {
    //this.questionService.seconds = 0;
    //this.questionService.qnProgress= 0;
    //this.questionService.getQuestions().subscribe(
     // (data:any)=>{
       //   this.questionService.qns = data;
        //  this.startTimer();
      //}
    //);
  }

  /*startTimer(){
    this.questionService.timer = setInterval(() =>{
      this.questionService.seconds++;
    }, 1000);
  }*/

}

