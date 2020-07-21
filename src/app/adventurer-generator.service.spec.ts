import { TestBed } from '@angular/core/testing';

import { AdventurerGeneratorService } from './adventurer-generator.service';

describe('AdventurerGeneratorService', () => {
  let service: AdventurerGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdventurerGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
