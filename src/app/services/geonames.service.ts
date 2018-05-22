import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { GeoNames } from '../classes/geonames';

@Injectable()
export class GeonamesService {
  private _jsonUrl: string;

  constructor(private _http: Http) { }

  getCountry(lat: string, lng: string): Observable<GeoNames> {
    this._jsonUrl = 'http://api.geonames.org/countryCodeJSON?lat=' +
      lat +
      '&lng=' +
      lng +
      '&username=mattmccherry';
    return this._http.get(this._jsonUrl).map((response) => <GeoNames>response.json());
  }

}
