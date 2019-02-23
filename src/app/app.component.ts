import {Component} from '@angular/core';
import {LocalTime} from '../../projects/viching-datetimepicker/src/lib/local-time';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public localTime: LocalTime = new LocalTime('2018-02-23 05:31:31');

  constructor() {
    // this.localTime.lang = 'en-us';
    this.localTime.initType = 'datetime';
  }
}
