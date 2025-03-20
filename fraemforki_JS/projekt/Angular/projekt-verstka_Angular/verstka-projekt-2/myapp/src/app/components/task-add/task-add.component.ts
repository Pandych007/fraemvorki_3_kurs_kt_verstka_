import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-add',
  imports: [ReactiveFormsModule],
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css',
})
export class TaskAddComponent {
  taskForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      dayTitle: [''],
      idDay: [''],
      priority: [''],
    });
  }

  onSubmit(): void {
    console.log(this.taskForm.value);
  }
}
