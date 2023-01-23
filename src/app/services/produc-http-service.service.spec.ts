import { TestBed } from '@angular/core/testing';

import { ProducHttpServiceService } from './produc-http-service.service';

describe('ProducHttpServiceService', () => {
  let service: ProducHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProducHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
