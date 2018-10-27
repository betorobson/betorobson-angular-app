import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../hero-mocks';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  heroes = HEROES;
  test;
  toggle = false;

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  changeTest() {
    this.toggle = !this.toggle;
    this.test = this.toggle
      ? 'x'
      : 'b';
  }

  constructor() {
  }

  ngOnInit() {
    this.changeTest();
  }

}
