import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortener'
})
export class ShortenerPipe implements PipeTransform {

  transform(value: string, valueLength: number): string {
    if (value.length <= valueLength) {
      return value;
    }
    return value.substring(0,valueLength) + "...";
  }

  // transform2(value: string) {
  //   return value.length > 10 ? value.substring(0,10) + "..." : value
  // }

}
