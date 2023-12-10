import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Itask } from '../../interfaces/itask'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  
  @Input() task!: Itask;
  @Output() deleteTask = new EventEmitter<Itask>();

  changeClass(evt: Event): void{
    const elementClick = evt.target as HTMLElement;
    const element = elementClick.closest('.card-header');
    element!.classList.toggle('selected');
  }

  onDelete(): void {
    this.deleteTask.emit(this.task);
  }
}
