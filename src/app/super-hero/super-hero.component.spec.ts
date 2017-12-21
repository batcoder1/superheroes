import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeroComponent } from './super-hero.component';
import { APP_BASE_HREF } from '@angular/common';
import { AppModule } from '../app.module';

describe('SuperHeroComponent', () => {
  let component: SuperHeroComponent;
  let fixture: ComponentFixture<SuperHeroComponent>;

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
    fixture = TestBed.createComponent(SuperHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
