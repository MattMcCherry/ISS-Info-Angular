import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ThemeService]
})
export class AppComponent implements OnInit {
  title: String = 'Iss Locator';
  isCollapsed: Boolean = true;
  lightModeStatus: Boolean;

  constructor(private _ThemeService: ThemeService) {
    this._ThemeService.lightModeState.subscribe(value => {
      this.lightModeStatus = value;
    });
  }

  ngOnInit() { }

  toggleMenu(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  updateValue(): void {
    this._ThemeService.lightModeState.next(!this.lightModeStatus);
  }
}
