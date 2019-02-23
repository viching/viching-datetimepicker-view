import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {LocalTime} from '../local-time';

@Component({
  selector: 'picker-calendar-content',
  templateUrl: './calendar-content.component.html',
  styleUrls: ['./calendar-content.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CalendarContentComponent implements OnInit {

  private _local: LocalTime;
  @Input()
  get local(): LocalTime {
    return this._local;
  }

  set local(value: LocalTime) {
    this._local = value;
  }
  @Output() localChange = new EventEmitter<LocalTime>();

  constructor() {
  }

  ngOnInit() {
  }

}
