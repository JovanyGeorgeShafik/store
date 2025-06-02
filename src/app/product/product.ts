import { Component, Input } from '@angular/core';
import { ProductSchmea } from '../../schema/product';
import { CurrencyPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CurrencyPipe, NgClass],
  templateUrl: './product.html',
  styleUrl: './product.scss'
})
export class Product {
  @Input() product?: ProductSchmea;
  @Input() forHome?: boolean;
}
