import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UiButtonsComponent} from './shared/components/ui-buttons/ui-buttons.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UiButtonsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'afkor';
}
