import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  score: number = 0; // Propriedade para armazenar a pontuação

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.score = params['score'] || 0; // Define a pontuação a partir do parâmetro da rota, ou 0 se não houver parâmetro
    });
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
