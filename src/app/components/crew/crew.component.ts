import { Component, OnInit } from '@angular/core';
import { Crew } from '../../classes/crew'
import { CrewService } from '../../services/crew.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss']
})
export class CrewComponent implements OnInit {
  crew: Crew;
  constructor(private _crewService: CrewService) { }

  ngOnInit() {
    this._crewService.getCrew().subscribe(response => this.crew = response);
  }

}