import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quizmiddllee2Component } from './quizmiddllee2.component';

describe('Quizmiddllee2Component', () => {
  let component: Quizmiddllee2Component;
  let fixture: ComponentFixture<Quizmiddllee2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quizmiddllee2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quizmiddllee2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
