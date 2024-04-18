import { TestBed } from '@angular/core/testing';

import { reclamationService } from './reclamation.service';

describe('reclamationsService', () => {
  let service: reclamationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(reclamationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
