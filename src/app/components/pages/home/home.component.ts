import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/takeWhile';
import { TimerObservable } from "rxjs/observable/TimerObservable";

import { IssLocationService } from '../../../services/iss-location.service';
import { IssNow } from '../../../classes/iss-Now';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  public issNowData: IssNow;
  private alive: boolean;
  private interval: number;

  constructor(private _IssLocationService: IssLocationService) {
    this.alive = true;
    this.interval = 10000;
  }

  ngOnInit() {
    TimerObservable.create(0, this.interval)
      .takeWhile(() => this.alive)
      .subscribe(() => {
        this._IssLocationService.getLocation()
          .subscribe((data) => {
            this.issNowData = data;
          });
      });
  }
}