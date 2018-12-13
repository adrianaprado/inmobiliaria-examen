import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Pipe({
  name: 'precios'
})
export class PrecioPipe implements PipeTransform {

  transform(value: any, numMin: number, numMax: number): any {
    if ((isNullOrUndefined(numMin) || numMin === 0) && (isNullOrUndefined(numMax) || numMax === 0)) {
      return value;
    } else if ((!isNullOrUndefined(numMin) || numMin !== 0) && (isNullOrUndefined(numMax) || numMax === 0)) {
      return value.filter(el => el.precio >= numMin);
    } else if ((isNullOrUndefined(numMin) || numMin === 0) && (!isNullOrUndefined(numMax) || numMax !== 0)) {
      return value.filter(el => el.precio <= numMax);
    } else {
      return value.filter(el => el.precio >= numMin && el.precio <= numMax);
    }
  }

}
