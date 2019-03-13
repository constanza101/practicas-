import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Per3Component } from './per3.component';

describe('Per3Component', () => {
  let component: Per3Component;
  let fixture: ComponentFixture<Per3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Per3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Per3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
