import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'pad', pure: false})
export class PadPipe implements PipeTransform {
  public transform(value: number, args?: any): string {
    return ('00' + value).slice(-2);
  }
}
