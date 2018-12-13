import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alquiler'
})
export class AlquilerPipe implements PipeTransform {

  transform(value: any, filtro: number): any {
    if (filtro === 0) {
      return value;
    } else if (filtro === 1) {
      return value.filter(el => el.alquiler === true);
    } else if (filtro === 2) {
      return value.filter(el => el.alquiler === false);
    }
  }

}
