import { Injectable } from '@angular/core';
import { IPlayground } from './Iplayground';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SourceListMap } from 'source-list-map';
import { switchMap, map, publishLast, refCount } from 'rxjs/operators';

@Injectable()
export class GetPlaygroundsService {
  public request$: Observable<IPlayground[]>;
  constructor(public httpclient: HttpClient) {
    this.request$ = httpclient
      .get('assets/copenhagen.json')
      .pipe(publishLast(), refCount());
  }

  public getPlaygrounds(): Observable<IPlayground[]> {
    return this.request$;
  }

  public getSelectedPlayground(id: string): Observable<IPlayground> {
    return this.request$.pipe(map(i => i.find(p => p.id === id)));
  }
}
