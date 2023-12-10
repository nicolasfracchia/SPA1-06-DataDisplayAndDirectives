import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Itask } from '../interfaces/itask';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor( private http: HttpClient ) { }

  getTasks(){
    return this.http.get<Itask[]>('http://127.0.0.1:3000/tasks');
  }

  getTask(id:number){
    return this.http.get<Itask>(`http://127.0.0.1:3000/tasks/${id}`);
  }

  getPriorityLevel(){
    return ['LOW','MEDIUM','HIGH'];
  }

  getProgressLevel(){
    return ['PENDING','STARTED','COMPLETED'];
  }

  createTask(frmData: FormData){
    return this.http.post<Itask>('http://127.0.0.1:3000/tasks', frmData);
  }

  updateTask(taskId: number, frmData: FormData){
    return this.http.put<Itask>(`http://127.0.0.1:3000/tasks/${taskId}`, frmData);
  }
  
}
