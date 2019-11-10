import { TestBed, async, inject } from '@angular/core/testing';

import { CorridaResolverGuard } from './corrida-resolver.guard';

describe('CorridaResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CorridaResolverGuard]
    });
  });

  it('should ...', inject([CorridaResolverGuard], (guard: CorridaResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});
