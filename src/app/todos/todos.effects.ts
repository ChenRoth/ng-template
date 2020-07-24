import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getTodos, getTodosSuccess, getTodosFail } from './todos.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
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
}
