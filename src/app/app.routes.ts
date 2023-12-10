import { Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { HomeComponent } from './components/home/home.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component:HomeComponent},
    {path: 'tasks', component: TasksComponent},
    {path: 'new-task', component: TaskFormComponent},
    {path: 'edit-task/:task-id', component: TaskFormComponent},
    {path: "**", component: TasksComponent}
];
