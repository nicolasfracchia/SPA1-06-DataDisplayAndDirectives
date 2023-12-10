import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './components/tasks/tasks.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NewTaskComponent } from "./components/new-task/new-task.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [
      CommonModule, 
      RouterOutlet,
      NavbarComponent, 
      TasksComponent, 
      HomeComponent, 
      NewTaskComponent]
})
export class AppComponent {
  logo: string = 'https://www.ldatschool.ca/wp-content/uploads/2017/04/Pen-making-check-marks-in-boxes.jpg';
  title: string = 'Task Manager';
  author: string = 'Nicolas Fracchia';
}
