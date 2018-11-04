import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})

export class HeroDetailComponent implements OnInit {

  hero: Hero;

  loading = true;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

  goBack() {
    this.location.back();
  }

  getHero() {

    const j = {
      a: 1,
      b: 2
    };

    const id = +this.route.snapshot.paramMap.get('id');

    this.heroService.getHero(id)
      .subscribe(
        (hero) => {
          console.log(hero);
          if (hero) {
            this.hero = hero;
            this.loading = false;
          }
        },
        (err) => {

          console.error(err);

          console.log(
            '[header] pragma: ',
            err.headers.get('pragma')
          );

        }
      );

  }

}
