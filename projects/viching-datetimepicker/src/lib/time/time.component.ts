import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {LocalTime} from '../local-time';
import {LANG} from '../lang';

@Component({
  selector: 'picker-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TimeComponent implements OnInit {

  hours: Array<number> = new Array<number>(24);
  minutes: Array<number> = new Array<number>(60);
  place: Array<string> = [];

  private _local: LocalTime;
  @Input()
  get local(): LocalTime {
    return this._local;
  }

  set local(value: LocalTime) {
    this._local = value;
    this.place = LANG.time_i18n(value.lang);
  }

  @Output() localChange = new EventEmitter<LocalTime>();

  constructor() {
    this.hours.fill(1).map((v, index) => {
      this.hours[index] = index;
    });
    this.minutes.fill(1).map((v, index) => {
      this.minutes[index] = index;
    });
  }

  ngOnInit() {
  }

  stopBubble(e: any) {
    // 如果提供了事件对象，则这是一个非IE浏览器
    if (e && e.stopPropagation) {
      // 因此它支持W3C的stopPropagation()方法
      e.stopPropagation();
    } else {
      // 否则，我们需要使用IE的方式来取消事件冒泡
      window.event.cancelBubble = true;
    }
    event.preventDefault();
    return false;
  }
}
