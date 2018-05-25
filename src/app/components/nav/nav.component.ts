import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  providers: [ThemeService]
})
export class NavComponent implements OnInit {
  @Output() lightModeStatus: Boolean;;

  constructor(public _ThemeService: ThemeService) { }

  ngOnInit() {
    this._ThemeService.lightModeStatus.subscribe((value) => {
      this.lightModeStatus = value;
    });
  }

  updateValue(): void {
    this._ThemeService.lightModeStatus.next(!this.lightModeStatus);
    console.log(this.lightModeStatus);
  }
}