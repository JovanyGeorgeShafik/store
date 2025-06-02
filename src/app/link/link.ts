import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-link',
  imports: [RouterLink],
  templateUrl: './link.html',
  styleUrl: './link.scss'
})
export class Link {
  @Input() link:string='';


}
