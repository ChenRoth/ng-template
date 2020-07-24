import { createAction, props } from '@ngrx/store';
import { ITodo } from './todos.reducer';

export const getTodos = createAction('GET_TODOS_PENDING');
export const getTodosSuccess = createAction('GET_TODOS_SUCCESS', props<{ todos: ITodo[] }>());
export const getTodosFail = createAction('GET_TODOS_FAIL');
