import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-featured-products',
  imports: [],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.css'
})
export class FeaturedProductsComponent {
  @Input() Airpods: string = '';
  @Input() Airpods2: string = '';
  @Input() Airpods3: string = '';
}
