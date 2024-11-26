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
  fraction: number;
  result: ResultModel;

  constructor(
    private converterService: ConverterService
  ) {}

  ngOnInit() {
    this.reset();
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
    this.converterService.getResultForToBinary(this.fraction, this.precision)
      .subscribe(result => {
        this.result = result;
      })
  }

  reset() {
    this.fraction = 0;
    this.precision = 5;
  }
}
