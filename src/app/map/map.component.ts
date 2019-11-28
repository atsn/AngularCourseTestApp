import { Component, OnInit } from '@angular/core';
import { GetPlaygroundsService } from '.././shared/get-playgrounds.service';
import { IPlayground } from '.././shared/Iplayground';
import { map, switchMap, filter, pluck } from 'rxjs/operators';
import { LocationService } from '.././shared/location.service';
import { Center, Marker } from '.././leaflet';
import { Observable, merge } from 'rxjs';
import { marker } from 'leaflet';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public playgrounds: IPlayground[];
  title = 'app works!';
  public selectedPlayground: IPlayground;
  public center: Center;
  public Markers$: Observable<Marker>;

  constructor(
    public activatedRoute: ActivatedRoute,
    public getPlaygroundservice: GetPlaygroundsService,
    public locationService: LocationService
  ) {}

  ngOnInit() {
    this.getPlaygroundservice
      .getPlaygrounds()
      .subscribe(i => (this.playgrounds = i));

    const SelectedPlaygroundObservable = this.activatedRoute.params.pipe(
      pluck<Params, string>('id'),
      filter(id => !!id),
      switchMap(id => this.getPlaygroundservice.getSelectedPlayground(id))
    );
    SelectedPlaygroundObservable.subscribe(i => {
      this.selectedPlayground = i;
      this.center = new Center(i.position.lat, i.position.lng, 14);
    });
    this.Markers$ = merge(
      this.locationService.current.pipe(
        map(i => new Marker('MyLocation', i.lat, i.lng))
      ),
      SelectedPlaygroundObservable.pipe(
        map(i => new Marker('MyLocation', i.position.lat, i.position.lng))
      )
    );
    this.locationService.current.subscribe(
      i => (this.center = new Center(i.lat, i.lng, 14))
    );
  }
}
