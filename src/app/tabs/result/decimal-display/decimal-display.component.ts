import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-decimal-display',
  templateUrl: './decimal-display.component.html',
  styleUrls: ['./decimal-display.component.scss'],
})
export class DecimalDisplayComponent {
  @Input() decimal: number;
  constructor() { }
}
