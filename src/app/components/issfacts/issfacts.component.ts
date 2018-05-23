import { Component, OnInit } from '@angular/core';
import { FactsService } from '../../services/facts.service';

@Component({
  selector: 'app-issfacts',
  templateUrl: './issfacts.component.html',
})
export class IssfactsComponent implements OnInit {
  private facts: string[];

  constructor(private _FactsService: FactsService) {
  }

  ngOnInit() {
    this._FactsService.getFacts().subscribe(response => this.facts = response);
  }
}
