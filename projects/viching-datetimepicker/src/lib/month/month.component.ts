import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {LANG} from '../lang';
import {LocalTime} from '../local-time';

export const MONTH = {0: 'Jan', 1: 'Feb', 2: 'Mar', 3: 'Apr', 4: 'May', 5: 'Jun', 6: 'Jul', 7: 'Aug', 8: 'Sep', 9: 'Oct', 10: 'Nov', 11: 'Dec'};

@Component({
  selector: 'picker-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MonthComponent implements OnInit {

  private rowNumber = 3;
  private colNumber = 4;

  private current: Date;
  private start: number;
  private end: number;
  public monthArr: Array<any> = [];

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
    this.reset();
    this._local.state.subscribe(type => {
      if (type == 'month') {
        this.reset();
      }
    });
  }

  reset(): void {
    let cur = new Date();
    this.current = cur;
    if (!this.local.year) {
      this.local.year = cur.getFullYear();
    } else {
      cur.setFullYear(this.local.year);
    }
    this.start = 0;
    this.end = this.local.month + this.rowNumber * this.colNumber;
    for (let i = 0; i < this.rowNumber; i++) {
      if (!this.monthArr[i]) {
        this.monthArr[i] = [];
      }
      let temp;
      for (let j = 0; j < this.colNumber; j++) {
        temp = this.start + i * this.colNumber + j;
        this.monthArr[i][j] = {num: temp, text: LANG.convert(MONTH[temp], this.local.lang)};
      }
    }
  }

  selectMonth(month) {
    this.local.month = month;
    if (this.local.initType != 'year' && this.local.initType != 'month') {
      this.local.type = this.local.initType;
    }
  }

}
