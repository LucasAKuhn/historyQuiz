import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  goGame() {
    this.router.navigate(["/game"])
  }

}
