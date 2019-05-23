import { TestBed } from '@angular/core/testing';

import { DailyOccurencesService } from './daily-occurences.service';

describe('DailyOccurencesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DailyOccurencesService = TestBed.get(DailyOccurencesService);
    expect(service).toBeTruthy();
  });
});
