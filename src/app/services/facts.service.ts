import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FactsService {
  private _factsUrl: string = '../assets/facts.json';

  constructor(private _http: Http) { }

  getFacts(): Observable<string[]> {
    return this._http.get(this._factsUrl).map((response) => <string[]>response.json());
  }
}
