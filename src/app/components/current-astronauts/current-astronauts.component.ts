import { Component, OnInit } from '@angular/core';
import { PeopleinspaceService } from '../../services/peopleinspace.service'
import { PeopleInSpace } from '../../classes/people-in-space';

@Component({
  selector: 'app-current-astronauts',
  templateUrl: './current-astronauts.component.html',
})
export class CurrentAstronautsComponent implements OnInit {
  private astronauts: PeopleInSpace;

  constructor(private _PeopleinspaceService: PeopleinspaceService) {
  }

  ngOnInit() {
    this._PeopleinspaceService.getAstronauts().subscribe(response => this.astronauts = response);
  }
}