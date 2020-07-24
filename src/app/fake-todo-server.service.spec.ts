import { TestBed } from '@angular/core/testing';

import { FakeTodoServerService } from './fake-todo-server.service';

describe('FakeTodoServerService', () => {
  let service: FakeTodoServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeTodoServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
