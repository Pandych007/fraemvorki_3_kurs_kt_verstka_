// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class TaskService {
//   private tasks = [
//     {
//       idDay: 1,
//       dayTitle: 'ПНД',
//       tasks: [
//         { idTask: 1, titleTask: 'ПОМЫТЬ ЖОПУ', priority: false },
//         { idTask: 2, titleTask: 'СХОДИТЬ НАХУЙ', priority: true },
//       ],
//     },
//     {
//       idDay: 2,
//       dayTitle: 'СР',
//       tasks: [{ idTask: 1, titleTask: 'ПОЙТИ В ЗАЛ', priority: true }],
//     },
//     {
//       idDay: 3,
//       dayTitle: 'ВТ',
//       tasks: [
//         { idTask: 1, titleTask: 'КАЧАТЬ ЖОПУ', priority: false },
//         { idTask: 2, titleTask: 'УДАЛИТЬ РОБЛАКС', priority: true },
//       ],
//     },
//   ];
//   constructor() {}

//   getTasks() {
//     return this.tasks;
//   }
//   addTasks(dayId: number, newTask: { titleTask: string; priority: boolean }) {
//     const day = this.tasks.find((d) => d.idDay === dayId);
//     if (day) {
//       const maxId = Math.max(...day.tasks.map((t) => t.idTask), 0);
//       day.tasks.push({
//         idTask: maxId + 1,
//         titleTask: newTask.titleTask,
//         priority: newTask.priority,
//       });
//     } else {
//       let datTitle = '';
//       if (dayId == 1) {
//         datTitle = 'Понедельник';
//       } else if (dayId == 2) {
//         datTitle = 'Вторник';
//       } else if (dayId == 3) {
//         datTitle = 'Среда';
//       } else if (dayId == 4) {
//         datTitle = 'Четверг';
//       } else if (dayId == 5) {
//         datTitle = 'Пятница';
//       } else if (dayId == 6) {
//         datTitle = 'Суббота';
//       } else if (dayId == 7) {
//         datTitle = 'Воскресенье';
//       }

//       this.tasks.push({
//         idDay: dayId,
//         dayTitle: datTitle,
//         tasks: [
//           {
//             idTask: 1,
//             titleTask: newTask.titleTask,
//             priority: newTask.priority,
//           },
//         ],
//       });
//     }
//   }
// }

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks = [
    {
      idDay: 1,
      dayTitle: 'Понедельник',
      tasks: [
        { idTask: 1, titleTask: 'ПОМЫТЬ ЖОПУ', priority: false },
        { idTask: 2, titleTask: 'СХОДИТЬ НАХУЙ', priority: true },
      ],
    },
    {
      idDay: 2,
      dayTitle: 'Среда',
      tasks: [{ idTask: 1, titleTask: 'ПОЙТИ В ЗАЛ', priority: true }],
    },
    {
      idDay: 3,
      dayTitle: 'Вторник',
      tasks: [
        { idTask: 1, titleTask: 'КАЧАТЬ ЖОПУ', priority: false },
        { idTask: 2, titleTask: 'УДАЛИТЬ РОБЛАКС', priority: true },
      ],
    },
  ];

  constructor() {}

  getTasks() {
    return this.tasks;
  }

  addTasks(dayId: number, newTask: { titleTask: string; priority: boolean }) {
    const day = this.tasks.find((d) => d.idDay === dayId);
    if (day) {
      const maxId = Math.max(...day.tasks.map((t) => t.idTask), 0);
      day.tasks.push({
        idTask: maxId + 1,
        titleTask: newTask.titleTask,
        priority: newTask.priority,
      });
    } else {
      let datTitle = '';
      if (dayId == 1) {
        datTitle = 'Понедельник';
      } else if (dayId == 2) {
        datTitle = 'Вторник';
      } else if (dayId == 3) {
        datTitle = 'Среда';
      } else if (dayId == 4) {
        datTitle = 'Четверг';
      } else if (dayId == 5) {
        datTitle = 'Пятница';
      } else if (dayId == 6) {
        datTitle = 'Суббота';
      } else if (dayId == 7) {
        datTitle = 'Воскресенье';
      }

      this.tasks.push({
        idDay: dayId,
        dayTitle: datTitle,
        tasks: [
          {
            idTask: 1,
            titleTask: newTask.titleTask,
            priority: newTask.priority,
          },
        ],
      });
    }
  }

  // ✅ Удаление одной задачи
  removeTask(dayId: number, taskId: number) {
    const day = this.tasks.find((d) => d.idDay === dayId);
    if (day) {
      day.tasks = day.tasks.filter((task) => task.idTask !== taskId);
    }
  }

  // ✅ Удаление всего дня
  removeDay(dayId: number) {
    this.tasks = this.tasks.filter((day) => day.idDay !== dayId);
  }
}
