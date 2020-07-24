import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IState } from '../app.module';
import { getTodos, getTodosSuccess } from './todos.actions';
import { TodosService } from '../todos.service';
import { ITodo } from './todos.reducer';
import { selectAllTodos, selectIncompleteTodos, selectCompleteTodos } from './todos.selectors';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
    todos$: Observable<ITodo[]>;

    constructor(private store: Store<IState>, private todosService: TodosService) {
        this.todos$ = store.select(selectAllTodos);
    }

    ngOnInit(): void {
        this.todosService.getTodos().subscribe(todos => {
            this.store.dispatch(getTodosSuccess({ todos }));
        })
    }

}
