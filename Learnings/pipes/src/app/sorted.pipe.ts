import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorted',
  pure: false
})
export class SortedPipe implements PipeTransform {
  transform(value: any, propName: string): any {
    return value.sort((a, b) => {
      return a[propName] > b[propName] ? 1 : a[propName] < b[propName] ? -1 : 0;
    });
  }
}
