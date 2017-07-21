import { IvaService } from './iva.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from './currency.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CurrencyPipe],
  providers:[IvaService]
})
export class SharedModule { }
