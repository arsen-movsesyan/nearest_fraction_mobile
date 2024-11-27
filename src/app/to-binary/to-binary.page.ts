import {Component, OnInit} from '@angular/core';
import {ResultModel} from "../models/result.model";
import {ConverterService} from "../services/converter.service";

@Component({
  selector: 'app-to-binary',
  templateUrl: 'to-binary.html',
  styleUrls: ['to-binary.page.scss']
})
export class ToBinaryComponent implements OnInit {
  precision: number;
  fraction: number | null;
  result: ResultModel| null;

  constructor(
    private converterService: ConverterService
  ) {}

  ngOnInit() {
    this.reset();
    // this.result = {
    //   decimal: 43.23,
    //   precision: 5,
    //   fraction: "43 7 / 32",
    //   whole: 43, numerator: 7, denominator: 32
    // }
  }

  get precisions() {
    const ret = [];
    for (let i = 2; i < 11; i++) {
      ret.push({
        value: i, precision: Math.pow(2, i)
      });
    }
    return ret;
  }

  convert() {
    if (!!this.fraction) {
      this.converterService.getResultForToBinary(this.fraction, this.precision)
        .subscribe(result => {
          this.result = result;
        })
    }
  }

  reset() {
    this.fraction = null;
    this.precision = 5;
    this.result = null;
  }
}
