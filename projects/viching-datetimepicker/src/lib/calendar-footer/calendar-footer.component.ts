import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {LocalTime} from '../local-time';
import {LANG} from '../lang';

@Component({
  selector: 'picker-calendar-footer',
  templateUrl: './calendar-footer.component.html',
  styleUrls: ['./calendar-footer.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CalendarFooterComponent implements OnInit {

  button: Array<string> = [];
  private _local: LocalTime;
  @Input()
  get local(): LocalTime {
    return this._local;
  }

  set local(value: LocalTime) {
    this._local = value;
    this.button = LANG.button_i18n(value.lang);
  }

  @Output() localChange = new EventEmitter<LocalTime>();

  constructor() {
  }

  ngOnInit() {
  }

  sure() {
    this.local.window = 'close';
  }

  reset() {
    this.local.reset();
  }
}
