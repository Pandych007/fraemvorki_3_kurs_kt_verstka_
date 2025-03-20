import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-card',
  templateUrl: './header-card.component.html',
  styleUrls: ['./header-card.component.css']
})
export class HeaderCardComponent {
  @Input() logoIcon: string = '';
  @Input() search: string = '';
  @Input() buy: string = '';
  @Input() login: string = '';
  @Input() ava1: string = '';
  @Input() ava2: string = '';
  @Input() ava3: string = '';
  @Input() ava4: string = '';
  @Input() headphones: string = '';
  @Input() videoPlay: string = '';
}
