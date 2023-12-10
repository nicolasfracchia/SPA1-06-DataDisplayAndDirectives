import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Itask } from '../../interfaces/itask'

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  
  @Input() task!: Itask;

  changeClass(evt: Event): void{
    const elementClick = evt.target as HTMLElement;
    const element = elementClick.closest('.card-header');
    element!.classList.toggle('selected');
  }
}
