import { Component, OnInit } from '@angular/core';
import { FactsService } from '../../services/facts.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-issfacts',
  templateUrl: './issfacts.component.html',
})
export class IssfactsComponent implements OnInit {
  private facts: string[];
  lightModeStatus: Boolean;

  constructor(private _FactsService: FactsService, private _ThemeService: ThemeService) {
    this._ThemeService.lightModeState.subscribe(value => {
      this.lightModeStatus = value;
    });
  }

  ngOnInit() {
    this._FactsService.getFacts().subscribe(response => this.facts = response);
  }
}
