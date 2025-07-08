import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number): string {
    if (value < 1000) {
      return value + "€";
    }
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "€";
  }

}
