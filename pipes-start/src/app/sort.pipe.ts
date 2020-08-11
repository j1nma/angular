import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, propertyName: string): any {
    return value.sort((v1, v2) => {
      var p1 = v1[propertyName];
      var p2 = v2[propertyName];
      if (p1 > p2) {
        return 1;
      }

      if (p1 < p2) {
        return -1;
      }

      return 0;
    })
  }
}
