import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';
import { Itask } from '../../interfaces/itask';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  title: string = 'New task';
  taskId: number = 0;
  tasksForm!: FormGroup;
  priorityLevels!: string[];
  progressLevels!: string[];
  status_message: {type: string, message: string, show: boolean} = {type: '', message: '', show: false};
  date_locale!: string;

  constructor(private formBuilder: FormBuilder, private _taskService: TasksService, private route: ActivatedRoute){
    this.priorityLevels = _taskService.getPriorityLevel();
    this.progressLevels = _taskService.getProgressLevel();

    this.checkEdit();

    this.tasksForm = formBuilder.group({
      title: ['', [Validators.required]],
      category: ['', [Validators.required]],
      task_date: [''],
      priority_level: ['', [Validators.required]],
      progress_level: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  checkEdit(){
    const taskId = this.route.snapshot.paramMap.get('task-id');
    
    if(taskId){
      this.title = 'Edit task';
      this.taskId = parseInt(taskId);

      this._taskService.getTask(this.taskId).subscribe(
        (result:Itask) => {
          this.tasksForm.patchValue(result);
          let task_date = new Date(result.task_date);
          this.tasksForm.patchValue({'task_date': task_date.toISOString().substring(0, 10)});
        },
        (error:any) => {
          this.status_message = {type: 'danger', message: "Error fetching the task information: " + error.message, show: true}
        }
      )
    }
  }

  submitForm(){
    document.getElementById('status-messages')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    if(!this.tasksForm.valid){
      this.status_message = {type: 'warning', message: "THE FORM DID NOT PASS ALL THE VALIDATIONS!", show: true}
    }else{
      (this.taskId === 0) ? this.createTask() : this.updateTask();
    }
  }

  createTask(){
    this._taskService.createTask(this.tasksForm.value).subscribe(
      (result:Itask) => {
        this.status_message = {type: 'success', message: "Task created successfully", show: true}
      },
      (error:any) => {
        this.status_message = {type: 'danger', message: "Error creating the task: " + error.message, show: true}
      }
    );
    this.tasksForm.reset();
  }

  updateTask(){
    this._taskService.updateTask(this.taskId, this.tasksForm.value).subscribe(
      (result:Itask) => {
        this.status_message = {type: 'success', message: "Task updated successfully", show: true}
      },
      (error:any) => {
        this.status_message = {type: 'danger', message: "Error creating the task: " + error.message, show: true}
      }
    );
  }

  get titleFormControl(){
    return this.tasksForm.get('title')!;
  }
  get categoryFormControl(){
    return this.tasksForm.get('category')!;
  }
  get dueDateFormControl(){
    return this.tasksForm.get('task_date')!;
  }
  get priorityLevelFormControl(){
    return this.tasksForm.get('priority_level')!;
  }
  get progressLevelFormControl(){
    return this.tasksForm.get('progress_level')!;
  }
  get descriptionFormControl(){
    return this.tasksForm.get('description')!;
  }
}
