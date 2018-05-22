import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { PeopleInSpace } from '../classes/people-in-space';

@Injectable()
export class PeopleinspaceService {
  private _jsonUrl: string = 'http://api.open-notify.org/astros.json';

  constructor(private _http: Http) { }

  getAstronauts(): Observable<PeopleInSpace> {
    return this._http.get(this._jsonUrl).map((response) => <PeopleInSpace>response.json());
  }
}