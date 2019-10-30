import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quizlasstt2Component } from './quizlasstt2.component';

describe('Quizlasstt2Component', () => {
  let component: Quizlasstt2Component;
  let fixture: ComponentFixture<Quizlasstt2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quizlasstt2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quizlasstt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
