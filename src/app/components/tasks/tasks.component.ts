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
  taskToDelete!: Itask | undefined;
  status_message: {type: string, message: string, show: boolean} = {type: '', message: "", show: false}

  constructor(private _taskService: TasksService){
    this.getTasks();
  }

  getTasks(){
    this._taskService.getTasks().subscribe((results) => {
      this.tasks = results;
    });
  }

  onTaskDelete(task: Itask): void {
    this.taskToDelete = task;
  }

  confirmDeleteTask(){
    if(this.taskToDelete){
      document.getElementById('status-messages')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

      this._taskService.deleteTask(this.taskToDelete.id).subscribe(
        (result:Itask) => {
          this.status_message = {type: 'success', message: "Task deleted successfully", show: true}
          this.getTasks();
        },
        (error:any) => {
          this.status_message = {type: 'danger', message: "Error deleting the task: " + error.message, show: true}
        }
      );
    }
  }

}
