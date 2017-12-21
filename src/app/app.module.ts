import { SuperHeroDetailComponent } from './super-hero-detail/super-hero-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { SuperHeroComponent } from './super-hero/super-hero.component';
import { SuperHeroService } from './services/super-hero.service';
import { RouteModule } from './route.module';
import { MaterialModule } from './material.module';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';


export class MyHammerConfig extends HammerGestureConfig  {
  overrides = {
      'swipe': {velocity: 0.4, threshold: 20}
  };
}
@NgModule({
  declarations: [
    AppComponent,
    SuperHeroComponent,
    SuperHeroDetailComponent
  ],
  imports: [
    BrowserModule,
    RouteModule,
    BrowserAnimationsModule,
    MaterialModule,
    ServiceWorkerModule.register('/ngsw-worker.js')
  ],
  providers: [
    {provide: SuperHeroService, useClass: SuperHeroService},
    {provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig} ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
})
export class AppModule { }
