import { Injectable } from '@angular/core';
import { IPlayground } from './Iplayground';
import { MOCK_PLAYGROUNDS } from './mock-playground';

@Injectable()
export class GetPlaygroundsService {
  constructor() {}

  public getPlaygrounds(): IPlayground[] {
    return MOCK_PLAYGROUNDS;
  }
}
