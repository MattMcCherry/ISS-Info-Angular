import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ThemeService {

  lightModeState: BehaviorSubject<boolean>;

  constructor() {
    this.lightModeState = new BehaviorSubject<boolean>(false);
  }
}