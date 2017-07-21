import { IvaService } from './../../shared/iva.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  value ;
  total = 0;
  iva :number= 0;

  @Input() vat: number;
  
  constructor(private sharedModule: IvaService) { }

  ngOnInit() {
  }

  calculate(value, vat) {
    this.iva = this.sharedModule.getIva(value, vat)
    this.total = value + this.iva;
  }
}
