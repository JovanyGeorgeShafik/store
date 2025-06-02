import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Search } from "../search/search";
import { Products } from "../products/products";

@Component({
  selector: 'app-home',
  imports: [Search, Products],
  templateUrl: './home.html',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './home.scss'
})
export class Home {

}
