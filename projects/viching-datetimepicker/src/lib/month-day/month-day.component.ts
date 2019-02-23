import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {LANG} from '../lang';
import {LocalTime} from '../local-time';

@Component({
  selector: 'picker-month-day',
  templateUrl: './month-day.component.html',
  styleUrls: ['./month-day.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MonthDayComponent implements OnInit {

  private rowNumber = 6;
  private colNumber = 7;

  private current: Date;
  private start: number;
  private end: number;
  public dateArr: Array<any> = [];
  private weekDayOptions: string[] = [];

  private _local: LocalTime;
  @Input()
  get local(): LocalTime {
    return this._local;
  }

  set local(value: LocalTime) {
    this._local = value;
    this.weekDayOptions = LANG.week_i18n(this.local.lang);
    this.reset();
    this._local.state.subscribe(type => {
      if (type == 'year' || type == 'month') {
        this.reset();
      }
    });
  }

  @Output() localChange = new EventEmitter<LocalTime>();

  constructor() {
    this.current = new Date();
  }

  ngOnInit() {

  }

  selectDay(date) {
    this.local.date = date;
  }

  reset() {

    let first = new Date(this.local.year, this.local.month, 1), last = new Date(this.local.year, this.local.month + 1, 0);
    this.start = first.getDate();
    this.end = last.getDate();
    let temp, curRow = 0;
    this.dateArr = [];
    for (let i = this.start; i <= this.end; i++) {
      temp = new Date(this.local.year, this.local.month, i);
      if (!this.dateArr[curRow]) {
        this.dateArr[curRow] = [];
      }
      this.dateArr[curRow][temp.getDay()] = i;
      if (temp.getDay() + 1 == this.colNumber) {
        curRow++;
      }
      if (curRow > this.rowNumber) {
        break;
      }
    }
  }
}
