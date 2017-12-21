import { SuperHeroDetailComponent } from './super-hero-detail/super-hero-detail.component';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { SuperHeroComponent } from './super-hero/super-hero.component';
import { AppComponent } from './app.component';
 

const routes: Routes = [
    {pathMatch: 'full', path: '', component: SuperHeroComponent },
    {pathMatch: 'full', path: 'detail/:name', component: SuperHeroDetailComponent },
  ];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})

export class RouteModule { }
