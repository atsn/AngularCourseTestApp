import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IPlayground } from '../shared/Iplayground';
import { MOCK_PLAYGROUNDS } from '../shared/mock-playground';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public active: boolean;
  private selectedPlayground: IPlayground;
  @Input()
  public playgrounds: IPlayground[];
  @Output()
  public playground = new EventEmitter<IPlayground>();

  constructor() {}
  ngOnInit() {}

  public PlaygroundSelected(playground: IPlayground) {
    this.playground.emit(playground);
    this.selectedPlayground = playground;
  }

  public isactive(playground: IPlayground): boolean {
    return playground === this.selectedPlayground;
  }
}
