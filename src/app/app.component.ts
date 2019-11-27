import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IPlayground } from './shared/Iplayground';
import { MOCK_PLAYGROUNDS } from './shared/mock-playground';
import { PlaygroundsPage } from '../../e2e/app.po';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public playgrounds: IPlayground[];
  title = 'app works!';
  public selectedPlayground: IPlayground;

  ngOnInit() {
    this.playgrounds = MOCK_PLAYGROUNDS;
  }
}
