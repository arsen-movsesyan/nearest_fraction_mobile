import {Component, OnInit} from '@angular/core';
import {ResultModel} from "../../models/result.model";
import {ConverterService} from "../../services/converter.service";

@Component({
  selector: 'app-to-decimal',
  templateUrl: 'to-decimal.html',
  styleUrls: ['to-decimal.scss']
})
export class ToDecimalPage implements OnInit {
  whole: number| null;
  numerator: number;
  denominator: number;
  precision: number;
  precisions: number[];
  result: ResultModel;

  constructor(private converterService: ConverterService) {}

  ngOnInit() {
    this.precisions = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.reset();
  }

  convert() {
    if(!this.convertDisabled) {
      this.converterService.getResultForToDecimal(this.whole, this.numerator, this.denominator, this.precision)
        .subscribe((result: ResultModel) => {
          this.result = result;
        })
    }
  }

  get convertDisabled() {
    if (((!this.numerator || this.numerator === 0) && (!this.denominator || this.denominator === 0)) && !!this.whole) {
      return false;
    }
    if ((!this.numerator || this.numerator === 0) && (!!this.denominator)) {
      return true;
    }
    if (!this.denominator || this.denominator === 0) {
      return true;
    }
    return !(!!this.numerator && !!this.denominator);
  }

  reset() {
    this.precision = 5;
    this.whole = null;
    this.numerator = 0;
    this.denominator = 0;
  }
}
