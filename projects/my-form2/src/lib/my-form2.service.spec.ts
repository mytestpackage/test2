import { TestBed } from '@angular/core/testing';

import { MyForm2Service } from './my-form2.service';

describe('MyForm2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyForm2Service = TestBed.get(MyForm2Service);
    expect(service).toBeTruthy();
  });
});
