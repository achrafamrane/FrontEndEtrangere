import { TestBed } from '@angular/core/testing';

import { DiplomeAccesServiceService } from './diplome-acces-service.service';

describe('DiplomeAccesServiceService', () => {
  let service: DiplomeAccesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiplomeAccesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
