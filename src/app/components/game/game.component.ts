import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router} from '@angular/router';
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
  score: number = 0;
  answerChosen: boolean = false;
  answerIndex: number = -1;
  totalQuestions: number = 5;

  constructor(private router: Router) { }

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
      if (this.timeLeft > 0 && !this.answerChosen) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
        if (!this.answerChosen) {
          this.nextQuestion();
          this.timeLeft = 10;
        }
      }
    }, 1000);
  }

  nextQuestion() {
    if (this.questionIndex < this.totalQuestions - 1) {
      this.questionIndex++;
      this.currentQuestion = this.questions[this.questionIndex];
      this.shuffleChoices();
      this.startTimer();
      this.answerChosen = false;
      this.answerIndex = -1;
    } else {
      console.log('Jogo finalizado!');
      this.router.navigate(['/score'], { queryParams: { score: this.score } });
    }
  }

  shuffleChoices() {
    fisherYatesShuffle(this.currentQuestion.choices);
  }

  checkAnswer(index: number) {
    if (!this.answerChosen) {
      this.answerChosen = true;
      this.answerIndex = index;
      const selectedChoice = this.currentQuestion.choices[index];
      if (selectedChoice === this.currentQuestion.answer) {
        this.score += 10;
        console.log('Resposta correta! Pontuação: ', this.score);
      } else {
        console.log('Resposta incorreta!');
      }
      setTimeout(() => {
        this.nextQuestion();
        this.timeLeft = 10;
      }, 1000);
    }
  }
}
