import { Component, OnInit } from '@angular/core';
import { IPlayground } from '../shared/Iplayground';
import { MOCK_PLAYGROUNDS } from '../shared/mock-playground';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public playgrounds: IPlayground[];
  constructor() {}
  ngOnInit() {
    this.playgrounds = MOCK_PLAYGROUNDS;
  }
}
