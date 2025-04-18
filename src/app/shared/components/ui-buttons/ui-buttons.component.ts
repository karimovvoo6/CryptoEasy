import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule, NgClass, NgStyle} from '@angular/common';

@Component({
  selector: 'app-ui-buttons',
  imports: [NgClass, NgStyle,CommonModule,],
  templateUrl: './ui-buttons.component.html',
  styleUrl: './ui-buttons.component.scss'
})
export class UiButtonsComponent {
  @Input() icon: string | undefined;
  @Input() title: string | undefined;
  @Input() customStyle: {[key:string]:any} | undefined;
  @Input() btnClass: string | undefined;
  @Output() clicked = new EventEmitter<MouseEvent>();
  @Output() dblclick = new EventEmitter<string>();
  iconPath: string | undefined;
}

