import { Component, OnInit, Input } from '@angular/core';
import { IPlayground } from '../shared/Iplayground';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input()
  public Playground: IPlayground;

  constructor() {}

  ngOnInit() {}

  getGoogleMapsUrlFromCordinates(Playground: IPlayground) {
    return `https://www.google.com/maps/place/
    ${Playground.position.lat.toFixed(6)},
    ${Playground.position.lng.toFixed(6)}`;
  }
}
