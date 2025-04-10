import { TestBed } from '@angular/core/testing';
import { TestingHelper } from '../../helpers/testing.spec';
import { ErrorService } from './error.service';

describe('MenuService', () => {
  let service: ErrorService;
  
  beforeEach(() => {
    TestingHelper.configureTest();
    service = TestBed.inject(ErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
