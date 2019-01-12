import { TestBed } from '@angular/core/testing';

import { TaskListsService } from './task-lists.service';

describe('TaskListsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskListsService = TestBed.get(TaskListsService);
    expect(service).toBeTruthy();
  });
});
