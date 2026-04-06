import { TestBed } from '@angular/core/testing';

import { Glossario } from './glossario';

describe('Glossario', () => {
  let service: Glossario;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Glossario);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
