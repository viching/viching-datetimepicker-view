import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarFooterComponent } from './calendar-footer.component';

describe('CalendarFooterComponent', () => {
  let component: CalendarFooterComponent;
  let fixture: ComponentFixture<CalendarFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
