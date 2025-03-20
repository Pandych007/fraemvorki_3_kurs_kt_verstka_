import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { TaskAddComponent } from './components/task-add/task-add.component';
@Component({
  selector: 'app-root',
  imports: [TaskAddComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'myapp';
}
