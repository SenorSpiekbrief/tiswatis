import { TestBed } from '@angular/core/testing';

import { ConsoleCommandsService } from './console-commands.service';

describe('ConsoleCommandsService', () => {
  let service: ConsoleCommandsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsoleCommandsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
