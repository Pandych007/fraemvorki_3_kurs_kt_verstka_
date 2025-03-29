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
        { idTask: 1, titleTask: 'получить права', priority: true },
        { idTask: 2, titleTask: 'помыть рукип', priority: false },
      ],
    },
    {
      idDay: 2,
      dayTitle: 'Вторник',
      tasks: [{ idTask: 1, titleTask: 'ПОЙТИ В ЗАЛ', priority: true }],
    },
    {
      idDay: 3,
      dayTitle: 'Среда',
      tasks: [
        { idTask: 1, titleTask: 'купить хлеб ', priority: true },
        { idTask: 2, titleTask: 'схоить в магазин', priority: false },
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

  remuveTask(taskId: number, dayId: number) {
    const day = this.tasks.find((d) => d.idDay === dayId);
    if (day) {
      day.tasks = day.tasks.filter((task) => task.idTask !== taskId);
      if (day.tasks.length === 0) {
        this.remuveDay(dayId);
      }
    }
  }
  remuveDay(dayId: number) {
    this.tasks = this.tasks.filter((day) => day.idDay !== dayId);
  }
}
