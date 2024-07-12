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
  score: number = 0;
  answerChosen: boolean = false;
  answerIndex: number = -1; // Armazena o índice da resposta escolhida

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
    if (this.questionIndex < this.questions.length - 1) {
      this.questionIndex++;
      this.currentQuestion = this.questions[this.questionIndex];
      this.shuffleChoices();
      this.startTimer();
      this.answerChosen = false;
      this.answerIndex = -1; // Reseta o índice da resposta escolhida
    } else {
      console.log('Jogo finalizado!');
    }
  }

  shuffleChoices() {
    fisherYatesShuffle(this.currentQuestion.choices);
  }

  checkAnswer(index: number) {
    if (!this.answerChosen) {
      this.answerChosen = true;
      this.answerIndex = index; // Armazena o índice da resposta escolhida
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
      }, 2000);
    }
  }
}
