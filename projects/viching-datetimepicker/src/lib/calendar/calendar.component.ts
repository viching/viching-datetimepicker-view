import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, Renderer2, ViewEncapsulation} from '@angular/core';
import {LocalTime} from '../local-time';

@Component({
  selector: 'picker-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent implements OnInit, AfterViewInit {

  showStatus = false;
  private _local: LocalTime;
  @Input()
  get local(): LocalTime {
    return this._local;
  }

  set local(value: LocalTime) {
    this._local = value;
    this._local.state.subscribe(type => {
      if (type == 'window') {
        if (this.local.window == 'open') {
          this.showStatus = true;
        }
        if (this.local.window == 'close') {
          this.showStatus = false;
        }
        console.log(this.local.window, this.showStatus);
        this.ref.detectChanges();
      }
    });
  }

  @Output() localChange = new EventEmitter<LocalTime>();

  get now() {
    if (!this.local) {
      return '';
    }
    return this.local.getFormatResult();
  }

  constructor(private ref: ChangeDetectorRef, private renderer: Renderer2) {

  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    if (this.local == null) {
      this.local = new LocalTime();
    }
    this.renderer.listen('document', 'mouseup', (event: any) => {
      // console.log(this.local.window, !this.closest(event.target, '.calendar-view'));
      if (event.target && event.target.className != 'mat-option-text' && !this.closest(event.target, '.calendar-view')) {
        this.close();
      }
    });
  }

  closest(el: any, selector): HTMLElement {
    if (!el) {
      return;
    }
    let matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    if (!matchesSelector) {
      return null;
    }
    while (el) {
      if (matchesSelector.call(el, selector)) {
        break;
      }
      el = el.parentElement;
    }
    return el;
  }

  show() {
    this.local.window = 'open';
  }

  close() {
    this.local.window = 'close';
  }
}
