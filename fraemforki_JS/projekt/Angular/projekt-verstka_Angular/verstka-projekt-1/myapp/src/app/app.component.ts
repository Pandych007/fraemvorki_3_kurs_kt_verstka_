import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderCardComponent } from './components/header-card/header-card.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { TopSellersComponent } from './components/top-sellers/top-sellers.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderCardComponent, FeaturedProductsComponent, TopSellersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  logoIcon = 'assets/images/Shopper.png';
  search = 'assets/images/search-Filled.png';
  buy = 'assets/images/Icon.png';
  login = 'assets/images/Vector.png';
  ava1 = 'assets/images/Ava1.png';
  ava2 = 'assets/images/Ava2.png';
  ava3 = 'assets/images/Ava3.png';
  ava4 = 'assets/images/Ava4.png';
  headphones = 'assets/images/Headphones.png';
  videoPlay = 'assets/images/Ava5.png';
  Airpods = 'assets/images/Airpods.png';
  Airpods2 = 'assets/images/Airpods2.png';
  Airpods3 = 'assets/images/Airpods3.png';
  headphones1 = 'assets/images/headphones1.png'
  headphones2 = 'assets/images/headphones2.png'
  headphones3 = 'assets/images/headphones3.png'
}
