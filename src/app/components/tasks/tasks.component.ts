import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Itask } from '../../interfaces/itask';
import { TaskComponent } from '../task/task.component';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskComponent],
  providers: [TasksService],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent{
  tasks!: Itask[];

  constructor(private taskService: TasksService){
    taskService.getTasks().subscribe((results) => {
      this.tasks = results;
    });
  }

}
