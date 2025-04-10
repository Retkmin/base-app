import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { TestingHelper } from '../helpers/testing.spec';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestingHelper.configureTest();
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
