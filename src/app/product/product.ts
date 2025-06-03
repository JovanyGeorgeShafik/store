import { Component, Input } from '@angular/core';
import { ProductSchmea } from '../../schema/product';
import { CurrencyPipe, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product',
  imports: [CurrencyPipe, NgClass, RouterLink, FontAwesomeModule],
  templateUrl: './product.html',
  styleUrl: './product.scss'
})
export class Product {
  @Input() product?: ProductSchmea;
  @Input() forHome?: boolean;
  faBookOpen = faBookOpen
}
