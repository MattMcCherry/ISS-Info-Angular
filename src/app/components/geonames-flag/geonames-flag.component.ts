import { Component, Input } from '@angular/core';

import { IssNow } from '../../classes/iss-Now';
import { GeonamesService } from '../../services/geonames.service';
import { GeoNames } from '../../classes/geonames';

@Component({
  selector: 'app-geonames-flag',
  templateUrl: './geonames-flag.component.html'
})
export class GeonamesFlagComponent {
  @Input() issNowData: IssNow;
  private geoNamesInfo: GeoNames;
  private currentCountry: string;
  public flagImage: string;

  constructor(private _GeonamesService: GeonamesService) { }

  ngOnChanges() {
    if (this.issNowData !== undefined) {
      this._GeonamesService.getCountry(this.issNowData.iss_position.latitude, this.issNowData.iss_position.longitude).subscribe(response => {
        this.geoNamesInfo = response;
        if (this.geoNamesInfo.status === undefined) {
          this.flagImage = 'http://www.countryflags.io/' + this.geoNamesInfo.countryCode + '/shiny/64.png';
          this.currentCountry = this.geoNamesInfo.countryName;
        }
      });
    }
  }

}
