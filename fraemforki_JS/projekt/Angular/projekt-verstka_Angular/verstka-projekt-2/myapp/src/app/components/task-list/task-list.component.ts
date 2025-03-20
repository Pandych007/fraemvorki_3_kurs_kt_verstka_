import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  taskForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      day: [''],
      title: [''],
    });
  }

  onSubmit(): void {
    console.log(this.taskForm.value);
  }
}
