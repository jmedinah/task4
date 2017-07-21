import { Injectable } from '@angular/core';

@Injectable()
export class IvaService {
  getIva(value: number, base: number) {
    let iva: number = 0;
    iva = (value * base) / 100;
    return iva;
  }
  constructor() { }

}
