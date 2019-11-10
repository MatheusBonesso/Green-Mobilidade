import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenHomeComponent } from './green-home.component';

describe('GreenHomeComponent', () => {
  let component: GreenHomeComponent;
  let fixture: ComponentFixture<GreenHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
