import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';
import { SuperHero } from '../../shared/model';
import { SuperHeroService } from '../services/super-hero.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-hero',
  templateUrl: './super-hero.component.html',
  styleUrls: ['./super-hero.component.css']
})
export class SuperHeroComponent implements OnInit {
  heroes$: Observable<SuperHero[]>;
  heroes: SuperHero[];
  isLoading= true;
 
  constructor(private service: SuperHeroService, private router: Router) { }

  ngOnInit() {
    this.heroes$ = this.service.getHeros();
     this.service.getHeros().subscribe(heroes => {
        this.heroes = heroes;
        this.isLoading = false;
      });
  }
  gotoDetail(hero) {
    const link = ['/detail', hero.name];
    this.router.navigate(link);
  }

  
}
