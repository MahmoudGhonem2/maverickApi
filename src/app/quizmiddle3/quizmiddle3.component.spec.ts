import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quizmiddle3Component } from './quizmiddle3.component';

describe('Quizmiddle3Component', () => {
  let component: Quizmiddle3Component;
  let fixture: ComponentFixture<Quizmiddle3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quizmiddle3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quizmiddle3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
