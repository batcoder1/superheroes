import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators/map';
import { Observable } from 'rxjs/Observable';
import { HEROES } from '../../shared/constants';
import { SuperHero } from '../../shared/model';
@Injectable()
export class SuperHeroService {

  constructor() { }

  getHeros(): Observable<SuperHero[]> {
    return Observable.create(observer => {
      setTimeout(() => {
        observer.next(HEROES);
        observer.complete();
      }, 1500);
    });
  }

  getByName(name: string): Observable<SuperHero> {
    return Observable.create(observer => {
      setTimeout(() => {
        observer.next(HEROES.filter(hero => hero.name === name));
        observer.complete();
      }, 1500);
    });
  }
}
