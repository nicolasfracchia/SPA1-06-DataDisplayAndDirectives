import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  newTaskForm!: FormGroup;
  priorityLevels!: string[];
  progressLevels!: string[];

  constructor(private formBuilder: FormBuilder, private _taskService: TasksService){
    this.priorityLevels = _taskService.getPriorityLevel();
    this.progressLevels = _taskService.getProgressLevel();
    this.newTaskForm = formBuilder.group({
      title: ['', [Validators.required]],
      category: ['', [Validators.required]],
      dueDate: [''],
      priorityLevel: ['', [Validators.required]],
      progressLevel: ['', [Validators.required]]
    });
    console.log(this.priorityLevels)
  }


  submitForm(){
    if(!this.newTaskForm.valid){
      console.log("THE FORM DID NOT PASS ALL THE VALIDATIONS!");
    }else{
      console.log('FORM DATA:', this.newTaskForm.value);
      this.newTaskForm.reset();
    }
  }

  get titleFormControl(){
    return this.newTaskForm.get('title')!;
  }
  get categoryFormControl(){
    return this.newTaskForm.get('category')!;
  }
  get dueDateFormControl(){
    return this.newTaskForm.get('dueDate')!;
  }
  get priorityLevelFormControl(){
    return this.newTaskForm.get('priorityLevel')!;
  }
  get progressLevelFormControl(){
    return this.newTaskForm.get('progressLevel')!;
  }
}
