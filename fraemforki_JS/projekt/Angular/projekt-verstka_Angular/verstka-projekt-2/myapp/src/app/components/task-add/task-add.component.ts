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
  deliteTasks(taskId: number, dayId: number): void {
    this.taskService.remuveTask(taskId, dayId);
    this.tasks = this.taskService.getTasks();
  }
  deliteDay(dayId: number): void {
    this.taskService.remuveDay(dayId);
    this.tasks = this.taskService.getTasks();
  }
}
