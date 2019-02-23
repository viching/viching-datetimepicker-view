import {BehaviorSubject} from 'rxjs';

declare var require: any;
const moment = require('moment');

const FORMAT = {
  year: 'YYYY',
  month: 'YYYY-MM',
  date: 'YYYY-MM-DD',
  datetime: 'YYYY-MM-DD HH:mm:ss'
};

export class LocalTime {
  public state: BehaviorSubject<any> = new BehaviorSubject<any>('init');

  private _year: number;
  private _month: number;
  private _date: number;
  private _hour: number;
  private _minute: number;
  private _second: number;
  private _lang = 'zh-cn';
  private _type = 'date';
  private _initType = 'date';
  private _dateStr: string;
  private _format: any;
  private _window: 'close' | 'open' = 'close';

  constructor(dateStr?: string, format?: any) {
    this._dateStr = dateStr;
    this._format = format || FORMAT;
    this.reset();
  }

  get year(): number {
    return this._year;
  }

  set year(value: number) {
    this._year = value;
    this.state.next('year');
  }

  get month(): number {
    return this._month;
  }

  set month(value: number) {
    this._month = value;
    this.state.next('month');
  }

  get date(): number {
    return this._date;
  }

  set date(value: number) {
    this._date = value;
    this.state.next('date');
  }

  get hour(): number {
    return this._hour;
  }

  set hour(value: number) {
    this._hour = value;
    this.state.next('hour');
  }

  get minute(): number {
    return this._minute;
  }

  set minute(value: number) {
    this._minute = value;
    this.state.next('minute');
  }

  get second(): number {
    return this._second;
  }

  set second(value: number) {
    this._second = value;
    this.state.next('second');
  }

  get lang(): string {
    return this._lang;
  }

  set lang(value: string) {
    this._lang = value;
    this.state.next('lang');
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
    this.state.next('type');
  }

  get initType(): string {
    return this._initType;
  }

  set initType(value: string) {
    this._initType = value;
    this.type = value;
    this.reset();
  }

  get window(): 'close' | 'open' {
    return this._window;
  }

  set window(value: 'close' | 'open') {
    this._window = value;
    this.state.next('window');
  }

  reset(): void {
    let cur;
    if (this._dateStr) {
      let m = moment(this._dateStr, this._format[this._type] || FORMAT[this._type]);
      cur = m.toDate();
    } else {
      cur = new Date();
    }
    // console.log(cur, this._dateStr, this._format[this._type] || FORMAT[this._type]);
    this.year = cur.getFullYear();
    this.month = cur.getMonth();
    this.date = cur.getDate();
    this.hour = cur.getHours();
    this.minute = cur.getMinutes();
    this.second = cur.getSeconds();
  }

  getResult(): Date {
    return new Date(this.year, this.month, this.date, this.hour, this.minute, this.second, 0);
  }

  getMillResult(): number {
    return this.getResult().getTime();
  }

  getFormatResult(): string {
    return moment(this.getResult()).format(this._format[this._type] || FORMAT[this._type]);
  }
}
