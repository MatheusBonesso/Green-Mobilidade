import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenFinanceiroComponent } from './green-financeiro.component';

describe('GreenFinanceiroComponent', () => {
  let component: GreenFinanceiroComponent;
  let fixture: ComponentFixture<GreenFinanceiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenFinanceiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenFinanceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
