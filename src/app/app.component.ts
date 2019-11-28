import { Component, OnInit } from '@angular/core';
import { GetPlaygroundsService } from './shared/get-playgrounds.service';
import { IPlayground } from './shared/Iplayground';
import { map } from 'rxjs/operators';
import { LocationService } from './shared/location.service';
import { Center, Marker } from './leaflet';
import { Observable, merge } from 'rxjs';
import { marker } from 'leaflet';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public playgrounds: IPlayground[];
  title = 'app works!';
  public selectedPlayground: IPlayground;
  public center: Center;
  public Markers$: Observable<Marker>;

  constructor(
    public getPlaygroundservice: GetPlaygroundsService,
    public locationService: LocationService
  ) {}

  ngOnInit() {
    this.getPlaygroundservice
      .getPlaygrounds()
      .subscribe(i => (this.playgrounds = i));

    this.Markers$ = this.locationService.current.pipe(
      map(i => new Marker('MyLocation', i.lat, i.lng))
    );
    this.locationService.current.subscribe(
      i => (this.center = new Center(i.lat, i.lng, 13))
    );
  }
}
