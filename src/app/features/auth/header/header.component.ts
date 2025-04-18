import { Component } from '@angular/core';
import {UiButtonsComponent} from '../../../shared/components/ui-buttons/ui-buttons.component';

@Component({
  selector: 'app-header',
  imports: [
    UiButtonsComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;

toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}

}

