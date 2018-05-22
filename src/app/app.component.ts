import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Iss Locator';
  isCollapsed: boolean = true;

  constructor() { }

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
}
