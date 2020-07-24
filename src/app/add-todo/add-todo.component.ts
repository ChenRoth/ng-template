import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTodo } from '../todos/todos.actions';

@Component({
    selector: 'app-add-todo',
    templateUrl: './add-todo.component.html',
    styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

    constructor(private store: Store) { }

    ngOnInit(): void {
    }

    submit() {
        const todoRequest = {
            description: 'test' + Date.now(),
            date: new Date(),
        }
        this.store.dispatch(addTodo({ todoRequest }));
    }
}
