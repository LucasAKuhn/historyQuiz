import { Component, OnInit, OnDestroy } from '@angular/core';
import { questions, fisherYatesShuffle } from '../../model/questions';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
  timeLeft: number = 10;
  interval: any;
  questions: any[] = [];
  currentQuestion: any = {};
  questionIndex: number = 0;

  ngOnInit(): void {
    fisherYatesShuffle(questions);
    this.questions = questions;
    this.currentQuestion = this.questions[this.questionIndex];
    this.startTimer();
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
        this.nextQuestion();
        this.timeLeft = 10;
        this.startTimer();
      }
    }, 1000);
  }

  nextQuestion() {
    if (this.questionIndex < this.questions.length - 1) {
      this.questionIndex++;
      this.currentQuestion = this.questions[this.questionIndex];
      this.timeLeft = 10;
      this.startTimer();
    } else {

    }
  }
}
