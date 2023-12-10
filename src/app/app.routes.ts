import { Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component:HomeComponent},
    {path: 'tasks', component: TasksComponent},
    {path: 'new-task', component: NewTaskComponent},
    {path: "**", component: TasksComponent}
];
