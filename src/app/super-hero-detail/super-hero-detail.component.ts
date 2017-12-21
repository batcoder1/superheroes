import { Component, OnInit , Input} from '@angular/core';
import { SuperHero } from '../../shared/model';
import { SuperHeroService } from '../services/super-hero.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-super-hero-detail',
  templateUrl: './super-hero-detail.component.html',
  styleUrls: ['./super-hero-detail.component.css']
})
export class SuperHeroDetailComponent implements OnInit {
  hero: SuperHero;
  navigated = false;
  isLoading = true;
  constructor(private service: SuperHeroService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.forEach((params: Params) => {
      if (params['name'] !== undefined) {
        const name = params.name;
        this.navigated = true;
        this.service.getByName(name.toString())
            .subscribe(hero => {
              this.hero = hero[0];
              this.isLoading = false;
            });
      } else {
        this.navigated = false;
        this.hero = new SuperHero();
      }
    });
  }
   

}
