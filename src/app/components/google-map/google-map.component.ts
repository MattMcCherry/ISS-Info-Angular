import { Component, ViewChild, Input } from '@angular/core';

import { } from '@types/googlemaps';
import { IssNow } from '../../classes/iss-Now';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})

export class GoogleMapComponent {
  @Input() issNowData: IssNow;
  @ViewChild('gmap') gmapElement: any;
  private map: google.maps.Map;
  private cLat: string;
  private cLng: string;
  private pLat: string;
  private pLng: string;
  private first: boolean = true;

  ngOnChanges() {
    if (this.issNowData !== undefined) {
      if (this.first) {
        this.initMap();
        this.first = false;
      }
      this.setPrevLoc();
      this.cLat = this.issNowData.iss_position.latitude;
      this.cLng = this.issNowData.iss_position.longitude;
      this.panMap();
    }
  }

  setPrevLoc(): void {
    if (this.cLat) {
      this.pLat = this.cLat;
      this.pLng = this.cLng;
    }
  }

  initMap(): void {
    this.cLat = this.issNowData.iss_position.latitude;
    this.cLng = this.issNowData.iss_position.longitude;
    const iss = new google.maps.LatLng(+(this.cLat), +(this.cLng));
    this.map = new google.maps.Map(this.gmapElement.nativeElement, {
      zoom: 5,
      disableDefaultUI: true,
      center: iss,
      mapTypeId: google.maps.MapTypeId.SATELLITE,
      draggable: false,
      scrollwheel: false,
      panControl: false,
      maxZoom: 5,
      minZoom: 5,
      draggableCursor: 'cursor'
    });
  }

  panMap(): void {
    this.map.panTo({ lat: +this.cLat, lng: +this.cLng });
    new google.maps.Polyline({
      path: [new google.maps.LatLng(+this.pLat, +this.pLng), new google.maps.LatLng(+this.cLat, +this.cLng)],
      geodesic: true,
      strokeColor: "#FFF",
      strokeOpacity: 1.0,
      strokeWeight: 3,
      map: this.map
    });
  }
}
