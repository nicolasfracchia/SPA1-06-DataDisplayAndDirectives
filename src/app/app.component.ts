import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, NavbarComponent]
})
export class AppComponent {
  logo: string = 'https://www.ldatschool.ca/wp-content/uploads/2017/04/Pen-making-check-marks-in-boxes.jpg';
  title: string = 'Task Manager';
  author: string = 'Nicolas Fracchia';
}
