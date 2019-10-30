import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quizmiddle2Component } from './quizmiddle2.component';

describe('Quizmiddle2Component', () => {
  let component: Quizmiddle2Component;
  let fixture: ComponentFixture<Quizmiddle2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quizmiddle2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quizmiddle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
