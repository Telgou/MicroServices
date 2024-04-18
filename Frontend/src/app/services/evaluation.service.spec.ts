import { TestBed } from '@angular/core/testing';

import { evaluationService } from './evaluation.service';

describe('evaluationService', () => {
  let service: evaluationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(evaluationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
