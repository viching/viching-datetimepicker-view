import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {LANG} from '../lang';

@Component({
  selector: 'picker-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class WeekComponent implements OnInit {

  @Input() public lang = 'zh-cn';

  private _year: number;
  private _week: number;


  @Input()
  get year() {
    return this._year;
  }

  set year(year) {
    this._year = year;
  }

  @Input()
  get week() {
    return this._week;
  }

  set week(week) {
    this._week = week;
  }

  private rowNumber = 8;
  private colNumber = 7;

  private current: number;
  private start: number;
  private end: number;
  public weekArr: Array<any> = [];

  constructor() {
    let cur = new Date();
    this.current = this.getWeekNum(cur);
    if (!this.year) {
      this.year = cur.getFullYear();
    } else {
      cur.setFullYear(this.year);
    }
    if (!this.week) {
      this.week = this.getWeekNum(cur);
    }
    this.start = 0;
    this.end = this.getWeekCount(this.year);
    let curRow = 0;
    for (let i = this.start; i < this.end; i++) {
      if (!this.weekArr[curRow]) {
        this.weekArr[curRow] = [];
      }
      let temp = i + 1;
      this.weekArr[curRow][i % this.colNumber] = {num: temp, text: LANG.week(temp, this.lang)};
      if ((i + 1) % this.colNumber == 0) {
        curRow++;
      }
    }
    console.log(this.weekArr);
  }

  private getWeekNum(dt) {
    let d1 = null, d2 = null;
    if (dt != null && dt instanceof Date) {
      console.log('000', dt);
      d1 = dt;
      d2 = new Date();
      d2.setTime(dt.getTime());
    } else {
      d1 = new Date(dt);
      d2 = new Date(dt);
    }
    d2.setMonth(0);
    d2.setDate(1);
    let rq = d1.getTime() - d2.getTime();
    if (d2.getDay() != 0) {
      rq += (d2.getDay() + 1) * (24 * 60 * 60 * 1000);
    }
    let days = Math.ceil(rq / (24 * 60 * 60 * 1000));
    let num = Math.ceil(days / 7);
    console.log('111', num);
    return num;
  }

  private getWeekCount(year) {
    let d1 = new Date(year, 0, 1);
    let d2 = new Date(year + 1, 0, 0);
    let rq = d2.getTime() - d1.getTime();
    if (d1.getDay() != 0) {
      rq += (d1.getDay() + 1) * (24 * 60 * 60 * 1000);
    }
    if (d2.getDay() != 6) {
      rq += (6 - d2.getDay()) * (24 * 60 * 60 * 1000);
    }
    let days = Math.ceil(rq / (24 * 60 * 60 * 1000));
    let num = Math.ceil(days / 7);
    return num;
  }

  ngOnInit() {
  }

  selectWeek(week) {
    this.week = week;
  }
}
