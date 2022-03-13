import { TestBed } from '@angular/core/testing';

import { adminRegisterService } from '../adminRegister/adminRegister.service';

describe('BookService', () => {
  let service: adminRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(adminRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
