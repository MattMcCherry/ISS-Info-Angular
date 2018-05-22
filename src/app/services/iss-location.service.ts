import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IssNow } from '../classes/iss-Now';

@Injectable()
export class IssLocationService {
  private _jsonUrl: string = 'http://api.open-notify.org/iss-now.json';

  constructor(private _http: Http) { }

  getLocation(): Observable<IssNow> {
    return this._http.get(this._jsonUrl).map((response) => <IssNow>response.json());
  }
}
