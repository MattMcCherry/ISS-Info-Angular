import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Crew } from '../classes/crew';

@Injectable()
export class CrewService {
  private _crewUrl: string = '../assets/crew.json';
  constructor(private _http: Http) { }

  getCrew(): Observable<Crew> {
    return this._http.get(this._crewUrl).map((response) => <Crew>response.json());
  }
}
