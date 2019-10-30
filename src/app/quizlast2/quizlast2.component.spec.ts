import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quizlast2Component } from './quizlast2.component';

describe('Quizlast2Component', () => {
  let component: Quizlast2Component;
  let fixture: ComponentFixture<Quizlast2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quizlast2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quizlast2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
