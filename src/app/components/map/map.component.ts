import { Component, Input, ViewChild } from '@angular/core';

import { } from '@types/googlemaps';
import 'rxjs/add/operator/takeWhile';
import { TimerObservable } from "rxjs/observable/TimerObservable";
import { Observable } from "rxjs";

import { IssLocationService } from '../../services/iss-location.service';
import { IssNow } from '../../classes/iss-Now';

import { PeopleinspaceService } from '../../services/peopleinspace.service'
import { PeopleInSpace } from '../../classes/people-in-space';

import { FactsService } from '../../services/facts.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  @Input() issNowData: IssNow;

  private astronauts: PeopleInSpace;

  private facts: string[];

  constructor(private _FactsService: FactsService, private _PeopleinspaceService: PeopleinspaceService) {
  }

  ngOnChanges() {
    this._FactsService.getFacts().subscribe(response => this.facts = response);
    this._PeopleinspaceService.getAstronauts().subscribe(response => this.astronauts = response);
  }
}