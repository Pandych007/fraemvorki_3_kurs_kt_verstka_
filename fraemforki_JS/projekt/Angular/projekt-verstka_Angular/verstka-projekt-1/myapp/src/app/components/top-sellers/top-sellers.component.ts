import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-sellers',
  imports: [],
  templateUrl: './top-sellers.component.html',
  styleUrl: './top-sellers.component.css'
})
export class TopSellersComponent {

  @Input() headphones1: string = '';
  @Input() headphones2: string = '';
  @Input() headphones3: string = '';
}
