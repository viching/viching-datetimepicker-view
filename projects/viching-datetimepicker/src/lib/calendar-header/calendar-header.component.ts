import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {LANG} from '../lang';
import {LocalTime} from '../local-time';

@Component({
  selector: 'picker-calendar-header',
  templateUrl: './calendar-header.component.html',
  styleUrls: ['./calendar-header.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CalendarHeaderComponent implements OnInit {

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

  pre(): void {
    if (this.local.type == 'year') {
      this.local.year -= 16;
      return;
    }
    if (this.local.type == 'month') {
      this.local.year--;
      return;
    }
    if (this.local.type == 'date' || this.local.type == 'datetime') {
      if (this.local.month == 0) {
        this.local.year--;
        this.local.month = 11;
      } else {
        this.local.month--;
      }
      return;
    }
    let cur = new Date(this.local.year, this.local.month, this.local.date, this.local.hour, this.local.minute, this.local.second, 0);
    if (this.local.type == 'datetime') {
      cur = new Date(cur.getTime() - 24 * 60 * 60 * 1000);
      this.local.year = cur.getFullYear();
      this.local.month = cur.getMonth();
      this.local.date = cur.getDate();
    }
  }

  next(): void {
    if (this.local.type == 'year') {
      this.local.year += 16;
      return;
    }
    if (this.local.type == 'month') {
      this.local.year++;
      return;
    }
    if (this.local.type == 'date' || this.local.type == 'datetime') {
      if (this.local.month + 1 == 12) {
        this.local.year++;
        this.local.month = 1;
      } else {
        this.local.month++;
      }
      return;
    }
    let cur = new Date(this.local.year, this.local.month, this.local.date, this.local.hour, this.local.minute, this.local.second, 0);
    if (this.local.type == 'datetime') {
      cur = new Date(cur.getTime() + 24 * 60 * 60 * 1000);
      this.local.year = cur.getFullYear();
      this.local.month = cur.getMonth();
      this.local.date = cur.getDate();
    }
  }

  selectType(type: string): void {
    this.local.type = type;
  }

}
