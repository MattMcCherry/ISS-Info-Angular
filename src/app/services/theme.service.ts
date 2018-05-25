import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ThemeService {

  lightModeStatus: BehaviorSubject<boolean>;

  constructor() {
    this.lightModeStatus = new BehaviorSubject<boolean>(false);
  }
}