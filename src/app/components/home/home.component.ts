import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  repoReadmeURL: string = 'https://raw.githubusercontent.com/nicolasfracchia/SPA1-06-DataDisplayAndDirectives/master/README.md';
  content!: any;

  constructor(private _tasksService: TasksService) {
    this._tasksService.lazyHomeContent(this.repoReadmeURL).subscribe((results) => {
        this.content = results;
        console.log('CONTENT:', this.content)
      });
  }

  

}
