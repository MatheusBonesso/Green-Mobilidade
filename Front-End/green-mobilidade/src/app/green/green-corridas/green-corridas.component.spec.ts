import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenCorridasComponent } from './green-corridas.component';

describe('GreenCorridasComponent', () => {
  let component: GreenCorridasComponent;
  let fixture: ComponentFixture<GreenCorridasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenCorridasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenCorridasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
