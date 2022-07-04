import { TestBed } from '@angular/core/testing';

import { NgxNetworkErrorHandlerService } from './ngx-network-error-handler.service';

describe('NgxNetworkErrorHandlerService', () => {
  let service: NgxNetworkErrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxNetworkErrorHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
