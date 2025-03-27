// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
// import { TaskService } from '../../services/task.service';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-task-add',
//   imports: [ReactiveFormsModule, CommonModule],
//   templateUrl: './task-add.component.html',
//   styleUrl: './task-add.component.css',
// })
// export class TaskAddComponent implements OnInit {
//   tasks: any[] = [];
//   taskForm: FormGroup;
//   constructor(private fb: FormBuilder, private taskService: TaskService) {
//     this.taskForm = this.fb.group({
//       idDay: [''],
//       priority: [''],
//       dayTitle: [''],
//     });
//   }
//   ngOnInit(): void {
//     this.tasks = this.taskService.getTasks();
//   }

//   onSubmit(): void {
//     if (this.taskForm.valid) {
//       const formDate = this.taskForm.value;
//       this.taskService.addTasks(Number(formDate.idDay), {
//         titleTask: formDate.dayTitle,
//         priority: formDate.priority,
//       });
//       this.taskForm.reset();
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-add',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css',
})
export class TaskAddComponent implements OnInit {
  tasks: any[] = [];
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.taskForm = this.fb.group({
      idDay: [''],
      priority: [''],
      dayTitle: [''],
    });
  }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const formDate = this.taskForm.value;
      this.taskService.addTasks(Number(formDate.idDay), {
        titleTask: formDate.dayTitle,
        priority: formDate.priority,
      });
      this.taskForm.reset();
    }
  }

  // ✅ Удаление задачи
  removeTask(dayId: number, taskId: number) {
    this.taskService.removeTask(dayId, taskId);
    this.tasks = this.taskService.getTasks();
  }

  // ✅ Удаление дня
  removeDay(dayId: number) {
    this.taskService.removeDay(dayId);
    this.tasks = this.taskService.getTasks();
  }
}
