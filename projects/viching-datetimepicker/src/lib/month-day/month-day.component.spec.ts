import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthDayComponent } from './month-day.component';

describe('MonthDayComponent', () => {
  let component: MonthDayComponent;
  let fixture: ComponentFixture<MonthDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
