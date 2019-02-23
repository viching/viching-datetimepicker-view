import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {LocalTime} from '../local-time';

@Component({
  selector: 'picker-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class YearComponent implements OnInit {

  private rowNumber = 4;
  private colNumber = 4;

  private current: number;
  private start: number;
  private end: number;
  public yearArr: Array<any> = [];

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
      if (type == 'year') {
        this.reset();
      }
    });
  }

  reset(): void {
    let cur = new Date();
    this.current = cur.getFullYear();
    if (!this.local.year) {
      this.local.year = cur.getFullYear();
    }
    this.start = this.local.year - this.local.year % (this.rowNumber * this.colNumber) + 1;
    this.end = this.local.year + this.rowNumber * this.colNumber;
    for (let i = 0; i < this.rowNumber; i++) {
      if (!this.yearArr[i]) {
        this.yearArr[i] = [];
      }
      for (let j = 0; j < this.colNumber; j++) {
        this.yearArr[i][j] = this.start + i * this.colNumber + j;
      }
    }
  }

  selectYear(year): void {
    this.local.year = year;
    if (this.local.initType != 'year') {
      this.local.type = 'month';
    }
  }

}
