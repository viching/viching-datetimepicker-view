import {ModuleWithProviders, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from './material/material.module';
import {ObjNgForPipe} from './pipes/obj-ng-for.pipe';
import {YearComponent} from './year/year.component';
import {MonthComponent} from './month/month.component';
import {WeekComponent} from './week/week.component';
import {TimeComponent} from './time/time.component';
import {CalendarContentComponent} from './calendar-content/calendar-content.component';
import {CalendarHeaderComponent} from './calendar-header/calendar-header.component';
import {CalendarFooterComponent} from './calendar-footer/calendar-footer.component';
import {CalendarComponent} from './calendar/calendar.component';
import {MonthDayComponent} from './month-day/month-day.component';
import {PadPipe} from './pipes/pad.pipe';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, MaterialModule],
  exports: [ObjNgForPipe, PadPipe, CalendarComponent],
  declarations: [ObjNgForPipe, PadPipe, YearComponent, MonthComponent, WeekComponent, TimeComponent, CalendarContentComponent, CalendarHeaderComponent, CalendarFooterComponent, CalendarComponent, MonthDayComponent],
})
export class VichingDatetimepickerModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: VichingDatetimepickerModule,
      providers: [],
    };
  }
}
