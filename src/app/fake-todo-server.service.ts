import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ITodo } from './todos/todos.reducer';

@Injectable({
    providedIn: 'root'
})
export class FakeTodoServerService implements InMemoryDbService {
    createDb() {
        const todos: ITodo[] = [
            { description: 'buy milk', date: new Date(), id: 1, isComplete: false },
            { description: 'clean the car', date: new Date(), id: 2, isComplete: true },
            { description: 'find a new country to live in', date: new Date(), id: 3, isComplete: true },
            { description: 'wear a mask', date: new Date(), id: 4, isComplete: false },

        ]

        return { todos };
    }

    
}
