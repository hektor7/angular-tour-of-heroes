import { Component, Input, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';



@Component({
  selector: 'my-heroes',
  styleUrls:['./heroes.component.css'],
  templateUrl: './heroes.component.html'
})
export class HeroesComponent  implements OnInit {
  heroes: Hero[];
  title = 'Tour of Heroes';

  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void{
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
}
