import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-fraction-display',
  templateUrl: './fraction-display.component.html',
  styleUrls: ['./fraction-display.component.scss'],
})
export class FractionDisplayComponent{
  @Input() whole: number;
  @Input() numerator: number;
  @Input() denominator: number;

  constructor() { }
}
