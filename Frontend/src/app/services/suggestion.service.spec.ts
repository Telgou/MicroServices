import { TestBed } from '@angular/core/testing';

import { suggestionService } from './suggestion.service ';

describe('suggestionService', () => {
  let service: suggestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(suggestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
