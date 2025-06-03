import { TestBed } from '@angular/core/testing';
import { TestingHelper } from '../../helpers/testing.spec';
import { LocalStorageService } from './user-data.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;
  
  beforeEach(() => {
    TestingHelper.configureTest();
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
