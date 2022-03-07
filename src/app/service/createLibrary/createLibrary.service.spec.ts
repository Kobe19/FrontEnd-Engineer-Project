import { TestBed } from '@angular/core/testing';

import { createLibraryService } from '../createLibrary/createLibrary.service';

describe('BookService', () => {
  let service: createLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(createLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
