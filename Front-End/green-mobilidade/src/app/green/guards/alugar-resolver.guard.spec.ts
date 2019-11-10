import { TestBed, async, inject } from '@angular/core/testing';

import { AlugarResolverGuard } from './alugar-resolver.guard';

describe('AlugarResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlugarResolverGuard]
    });
  });

  it('should ...', inject([AlugarResolverGuard], (guard: AlugarResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});
