import { TestBed } from '@angular/core/testing';

import { SpaceXApiService } from './space-xapi.service';

describe('SpaceXApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpaceXApiService = TestBed.get(SpaceXApiService);
    expect(service).toBeTruthy();
  });
});
