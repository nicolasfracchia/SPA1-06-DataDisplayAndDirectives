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
}
