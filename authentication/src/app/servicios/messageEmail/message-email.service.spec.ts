import { TestBed } from '@angular/core/testing';

import { MessageEmailService } from './message-email.service';

describe('MessageEmailService', () => {
  let service: MessageEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
