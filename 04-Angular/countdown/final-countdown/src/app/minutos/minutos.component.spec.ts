import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinutosComponent } from './minutos.component';

describe('MinutosComponent', () => {
  let component: MinutosComponent;
  let fixture: ComponentFixture<MinutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
