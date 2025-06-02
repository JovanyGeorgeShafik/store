import { Component } from '@angular/core';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome"
import {faBagShopping,faDollarSign,faSearch} from "@fortawesome/free-solid-svg-icons"
@Component({
  selector: 'app-search',
  imports: [FontAwesomeModule],
  templateUrl: './search.html',
  styleUrl: './search.scss'
})
export class Search {
  faBagShopping=faBagShopping
  faSearch=faSearch
  faDollarSign=faDollarSign
focusInput($event:Event,next:HTMLInputElement){
$event.preventDefault()
  next.focus()
}
}
