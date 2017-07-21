import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let format: string = "";
    format = "$ " + " " + value;
    return format;
  }

}
