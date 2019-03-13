import { TestBed } from '@angular/core/testing';

import { EncriptarService } from './encriptar.service';

describe('EncriptarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EncriptarService = TestBed.get(EncriptarService);
    expect(service).toBeTruthy();
  });
});
