import { TestBed } from '@angular/core/testing';

import { GetPlaygroundsService } from './get-playgrounds.service';

describe('GetPlaygroundsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetPlaygroundsService = TestBed.get(GetPlaygroundsService);
    expect(service).toBeTruthy();
  });
});
