import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  photo: string = 'https://www.ldatschool.ca/wp-content/uploads/2017/04/Pen-making-check-marks-in-boxes.jpg';

  constructor() {}

  

}
