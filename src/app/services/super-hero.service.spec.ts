import { TestBed, inject } from '@angular/core/testing';

import { SuperHeroService } from './super-hero.service';
import { Observable } from 'rxjs/Observable';
import { SuperHero } from '../../shared/model';

describe('SuperHeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuperHeroService]
    });
  });

  it('should be created', inject([SuperHeroService], (service: SuperHeroService) => {
    expect(service).toBeTruthy();
  }));


  it('should get heroes', () => {
    const service: SuperHeroService = TestBed.get(SuperHeroService);
    service.getHeros().subscribe(
      heroes => {
        expect(heroes[0].name).toEqual('Scarlet Witch');
      }
    );
  });
  it('should get Iron Man and must be Avengers', () => {
    const service: SuperHeroService = TestBed.get(SuperHeroService);
    service.getByName('Iron Man').subscribe(
      heroes => {
        expect(heroes[0].name).toEqual('Iron Man');
        expect(heroes[0].isAvengers).toEqual(true);
      }
    );
  });
  it('heroes should not be null', () => {
    const service: SuperHeroService = TestBed.get(SuperHeroService);

    spyOn(service, 'getHeros');

    service.getHeros();

    expect(service.getHeros()).not.toBeNull();
  });
  it('spy service: getHeroes should be called', () => {
    const service: SuperHeroService = TestBed.get(SuperHeroService);

    const spy =  spyOn(service, 'getHeros');
    service.getHeros();

    expect(spy).toHaveBeenCalled();
    });


});
