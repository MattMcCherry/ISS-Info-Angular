import { TestBed, inject } from '@angular/core/testing';

import { PeopleinspaceService } from './peopleinspace.service';

describe('PeopleinspaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeopleinspaceService]
    });
  });

  it('should be created', inject([PeopleinspaceService], (service: PeopleinspaceService) => {
    expect(service).toBeTruthy();
  }));
});
