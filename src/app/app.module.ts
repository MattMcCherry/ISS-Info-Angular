import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Http, Response, HttpModule } from '@angular/http';
import { AlertModule, CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { IssLocationService } from './services/iss-location.service';
import { GeonamesService } from './services/geonames.service';
import { CrewService } from './services/crew.service';
import { PeopleinspaceService } from './services/peopleinspace.service';
import { FactsService } from './services/facts.service';

import { MissionsComponent } from './components/missions/missions.component';
import { AboutComponent } from './components/pages/about/about.component';
import { CrewComponent } from './components/pages/crew/crew.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { GeonamesFlagComponent } from './components/geonames-flag/geonames-flag.component';
import { IssfactsComponent } from './components/issfacts/issfacts.component';
import { CurrentAstronautsComponent } from './components/current-astronauts/current-astronauts.component';
import { FullmapComponent } from './components/pages/fullmap/fullmap.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'crew', component: CrewComponent },
  { path: 'missions', component: MissionsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'map', component: FullmapComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    MissionsComponent,
    AboutComponent,
    CrewComponent,
    FooterComponent,
    HomeComponent,
    GoogleMapComponent,
    GeonamesFlagComponent,
    IssfactsComponent,
    CurrentAstronautsComponent,
    FullmapComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [IssLocationService, GeonamesService, CrewService, PeopleinspaceService, FactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
