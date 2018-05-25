import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: String = 'Iss Locator';
  isCollapsed: Boolean = true;
  lightModeActive: Boolean;

  constructor() { }

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
}
