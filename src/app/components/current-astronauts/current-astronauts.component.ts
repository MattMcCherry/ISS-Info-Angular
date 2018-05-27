import { Component, OnInit } from '@angular/core';
import { PeopleinspaceService } from '../../services/peopleinspace.service'
import { PeopleInSpace } from '../../classes/people-in-space';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-current-astronauts',
  templateUrl: './current-astronauts.component.html',
})
export class CurrentAstronautsComponent implements OnInit {
  private astronauts: PeopleInSpace;
  lightModeStatus: Boolean;

  constructor(private _PeopleinspaceService: PeopleinspaceService, private _ThemeService: ThemeService) {
    this._ThemeService.lightModeState.subscribe(value => {
      this.lightModeStatus = value;
    });
  }

  ngOnInit() {
    this._PeopleinspaceService.getAstronauts().subscribe(response => this.astronauts = response);
  }
}