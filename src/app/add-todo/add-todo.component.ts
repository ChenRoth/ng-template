import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTodo } from '../todos/todos.actions';
import { ITodo } from '../todos/todos.reducer';

@Component({
    selector: 'app-add-todo',
    templateUrl: './add-todo.component.html',
    styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
    todo: Omit<ITodo, 'id' | 'isComplete'> = {
        description: '',
        date: '' as any,
    };
    constructor(private store: Store) { }

    ngOnInit(): void {
    }

    submit() {
        this.store.dispatch(addTodo({ todoRequest: this.todo }));
        this.todo = {
            description: '',
            date: '' as any,
        };
    }
}
