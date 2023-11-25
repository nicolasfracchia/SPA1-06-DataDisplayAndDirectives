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
}