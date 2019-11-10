import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenVeiculosComponent } from './green-veiculos.component';

describe('GreenVeiculosComponent', () => {
  let component: GreenVeiculosComponent;
  let fixture: ComponentFixture<GreenVeiculosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenVeiculosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenVeiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
