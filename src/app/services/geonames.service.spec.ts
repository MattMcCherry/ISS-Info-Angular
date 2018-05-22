import { TestBed, inject } from '@angular/core/testing';

import { GeonamesService } from './geonames.service';

describe('GeonamesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeonamesService]
    });
  });

  it('should be created', inject([GeonamesService], (service: GeonamesService) => {
    expect(service).toBeTruthy();
  }));
});
