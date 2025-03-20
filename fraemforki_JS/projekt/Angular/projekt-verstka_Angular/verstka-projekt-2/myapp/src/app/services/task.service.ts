import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}
  getTasks() {
    return;
    [
      {
        idDay: 1,
        dayTitle: 'ПНД',
        tasks: [
          { idTask: 1, titleTask: 'Task 1', priority: false },
          { idTask: 2, titleTask: 'Task 2', priority: true },
        ],
      },
      {
        idDay: 2,
        dayTitle: 'СР',
        tasks: [{ idTask: 1, titleTask: 'Task 3', priority: true }],
      },
      {
        idDay: 3,
        dayTitle: 'ВТ',
        tasks: [
          { idTask: 1, titleTask: 'Task 4', priority: false },
          { idTask: 2, titleTask: 'Task 5', priority: true },
        ],
      },
    ];
  }
}
