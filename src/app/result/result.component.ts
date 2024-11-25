import {Component, Input,} from '@angular/core';
import {ResultModel} from "../models/result.model";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent {
  @Input() result: ResultModel;
  @Input() convertor: number;
  constructor() { }

}
