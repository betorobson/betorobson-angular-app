import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[];
  test;
  toggle = false;

  constructor(
    private heroService: HeroService,
    public messageService: MessageService
   ) {

  }

  changeTest() {

    this.toggle = !this.toggle;
    this.test = this.toggle
      ? 'x'
      : 'b';

     this.messageService.add('changeTest()');

  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes
    );
  }

  ngOnInit() {
    this.changeTest();
    this.getHeroes();
  }

}
