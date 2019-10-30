import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quizlast1Component } from './quizlast1.component';

describe('Quizlast1Component', () => {
  let component: Quizlast1Component;
  let fixture: ComponentFixture<Quizlast1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quizlast1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quizlast1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
