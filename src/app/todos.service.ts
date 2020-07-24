import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ITodo } from './todos/todos.reducer';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TodosService {

    constructor(private http: HttpClient) { }

    getTodos(): Observable<ITodo[]> {
        return this.http.get<ITodo[]>('/api/todos');
    }

    addTodo(todoRequest: Omit<ITodo, 'id' | 'isComplete'>) {
        return this.http.post<ITodo>('/api/todos', { ...todoRequest, isComplete: false });
    }
}
