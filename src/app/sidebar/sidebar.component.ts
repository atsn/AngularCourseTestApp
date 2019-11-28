import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IPlayground } from '../shared/Iplayground';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public active: boolean;
  @Input()
  public playgrounds: IPlayground[];
  @Input()
  private selectedPlayground: IPlayground;
  @Output()
  public playground = new EventEmitter<IPlayground>();

  constructor(public router: Router) {}
  ngOnInit() {}

  public PlaygroundSelected(playground: IPlayground) {
    this.playground.emit(playground);
    this.selectedPlayground = playground;
    this.router.navigate([playground.id]);
  }

  public isactive(playground: IPlayground): boolean {
    return playground === this.selectedPlayground;
  }
}
