import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenAlugarComponent } from './green-alugar.component';

describe('GreenAlugarComponent', () => {
  let component: GreenAlugarComponent;
  let fixture: ComponentFixture<GreenAlugarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenAlugarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenAlugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
