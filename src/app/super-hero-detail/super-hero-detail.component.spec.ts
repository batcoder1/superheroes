import { APP_BASE_HREF } from '@angular/common';
import { AppModule } from './../app.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeroDetailComponent } from './super-hero-detail.component';

describe('SuperHeroDetailComponent', () => {
  let component: SuperHeroDetailComponent;
  let fixture: ComponentFixture<SuperHeroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' }
      ],
      imports: [AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperHeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
