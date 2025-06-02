import { Component } from '@angular/core';
import { Links } from "../links/links";

@Component({
  selector: 'app-header',
  imports: [ Links],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
