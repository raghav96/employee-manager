/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppResponseService } from './app-response.service';

describe('AppResponseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppResponseService]
    });
  });

  it('should ...', inject([AppResponseService], (service: AppResponseService) => {
    expect(service).toBeTruthy();
  }));
});
