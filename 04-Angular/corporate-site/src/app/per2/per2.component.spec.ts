import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Per2Component } from './per2.component';

describe('Per2Component', () => {
  let component: Per2Component;
  let fixture: ComponentFixture<Per2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Per2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Per2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
