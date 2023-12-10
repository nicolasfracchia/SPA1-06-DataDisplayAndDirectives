import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';
import { Itask } from '../../interfaces/itask';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  tasksForm!: FormGroup;
  priorityLevels!: string[];
  progressLevels!: string[];
  status_message: {type: string, message: string, show: boolean} = {type: '', message: '', show: false};

  constructor(private formBuilder: FormBuilder, private _taskService: TasksService){
    this.priorityLevels = _taskService.getPriorityLevel();
    this.progressLevels = _taskService.getProgressLevel();
    this.tasksForm = formBuilder.group({
      title: ['TASK FORM', [Validators.required]],
      category: ['ASSIGNMENT', [Validators.required]],
      task_date: ['2023-12-16'],
      priority_level: ['LOW', [Validators.required]],
      progress_level: ['STARTED', [Validators.required]],
      description: ['some description to fill the blanks...', [Validators.required]]
    });
  }


  submitForm(){
    document.getElementById('status-messages')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    if(!this.tasksForm.valid){
      this.status_message = {type: 'warning', message: "THE FORM DID NOT PASS ALL THE VALIDATIONS!", show: true}
    }else{
      this.createTask();
    }
    this.tasksForm.reset();
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
