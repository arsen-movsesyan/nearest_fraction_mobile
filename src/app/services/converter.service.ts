import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ResultModel} from "../models/result.model";
import {backendServer} from "../constants";

@Injectable()
export class ConverterService {

  constructor(private httpClient: HttpClient) { }

  getResultForToBinary(fraction: number|null, precision: number) {
    return this.httpClient.post<ResultModel>(`${backendServer}/to-binary`, {decimal_fraction: fraction, precision});
  }

  getResultForToDecimal(whole: number|null, numerator: number, denominator: number, precision: number) {
    return this.httpClient.post<ResultModel>(`${backendServer}/to-decimal`, {
      fraction: `${numerator}/${denominator}`,
      precision: precision,
      whole: whole
    });
  }


}
