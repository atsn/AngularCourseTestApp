import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IPlayground } from './shared/Iplayground';
import { MOCK_PLAYGROUNDS } from './shared/mock-playground';
import { PlaygroundsPage } from '../../e2e/app.po';
import { GetPlaygroundsService } from './shared/get-playgrounds.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public playgrounds: IPlayground[];
  title = 'app works!';
  public selectedPlayground: IPlayground;

  constructor(public getPlaygroundservice: GetPlaygroundsService) {}

  ngOnInit() {
    this.playgrounds = this.getPlaygroundservice.getPlaygrounds();
  }
}
