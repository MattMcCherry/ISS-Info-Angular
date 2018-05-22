import { TestBed, inject } from '@angular/core/testing';

import { IssLocationService } from './iss-location.service';

describe('IssLocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IssLocationService]
    });
  });

  it('should be created', inject([IssLocationService], (service: IssLocationService) => {
    expect(service).toBeTruthy();
  }));
});
