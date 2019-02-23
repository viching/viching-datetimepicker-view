import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule, MatIconModule, MatSelectModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {VichingDatetimepickerModule} from '../../projects/viching-datetimepicker/src/lib/viching-datetimepicker.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    VichingDatetimepickerModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
