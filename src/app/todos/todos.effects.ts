import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getTodos, getTodosSuccess, getTodosFail, addTodo, addTodoSuccess, addTodoFail } from './todos.actions';
import { mergeMap, map, catchError, exhaustMap } from 'rxjs/operators';
import { TodosService } from '../todos.service';
import { of } from 'rxjs';

@Injectable()
export class TodosEffects {
    constructor(private actions$: Actions, private todosService: TodosService) {

    }

    getTodos$ = createEffect(() => this.actions$.pipe(
        ofType(getTodos),
        mergeMap(action => this.todosService.getTodos().pipe(
            map(todos => getTodosSuccess({ todos })),
            catchError(() => of(getTodosFail())
            ))
        )
    ))

    addTodo$ = createEffect(() => this.actions$.pipe(
        ofType(addTodo),
        // exhaustMap only accepts one action at a time and ignores any subsequent actions
        // until the effect is complete
        exhaustMap(action => this.todosService.addTodo(action.todoRequest).pipe(
            map(todo => addTodoSuccess({ todo })),
            catchError(() => of(addTodoFail()))
        ))
    ))
}
