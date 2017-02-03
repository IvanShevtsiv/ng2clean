/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProviderDataService } from './provider-data.service';

describe('ProviderDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProviderDataService]
    });
  });

  it('should ...', inject([ProviderDataService], (service: ProviderDataService) => {
    expect(service).toBeTruthy();
  }));
});
