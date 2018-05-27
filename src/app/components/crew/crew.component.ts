import { Component, OnInit } from '@angular/core';
import { Crew } from '../../classes/crew'
import { CrewService } from '../../services/crew.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss'],
})
export class CrewComponent implements OnInit {
  crew: Crew;
  lightModeStatus: Boolean;

  constructor(private _crewService: CrewService, private _ThemeService: ThemeService) {
    this._ThemeService.lightModeState.subscribe(value => {
      this.lightModeStatus = value;
    });
  }

  ngOnInit() {
    this._crewService.getCrew().subscribe(response => this.crew = response);
  }

}