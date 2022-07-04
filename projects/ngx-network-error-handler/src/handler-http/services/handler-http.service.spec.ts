/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HandlerHttpService } from './handler-http.service';

describe('Service: HandlerHttp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HandlerHttpService]
    });
  });

  it('should ...', inject([HandlerHttpService], (service: HandlerHttpService) => {
    expect(service).toBeTruthy();
  }));
});
