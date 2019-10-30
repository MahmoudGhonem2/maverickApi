import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quizmiddle1Component } from './quizmiddle1.component';

describe('Quizmiddle1Component', () => {
  let component: Quizmiddle1Component;
  let fixture: ComponentFixture<Quizmiddle1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quizmiddle1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quizmiddle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
