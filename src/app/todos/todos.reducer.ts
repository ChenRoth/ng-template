import { createReducer, on } from '@ngrx/store'
import { getTodos, getTodosSuccess, addTodoSuccess, getTodosFail } from './todos.actions';

export interface ITodo {
    id: number;
    description: string;
    date: Date;
    isComplete: boolean;
}

export interface ITodosState {
    items: ITodo[];
    isAdding: boolean;
    isLoading: boolean;
};

const initialState: ITodosState = {
    items: [],
    isAdding: false,
    isLoading: false,
};

export const todosReducer = createReducer<ITodosState>(initialState,
    on(getTodos, state => ({ ...state, isLoading: true })),
    on(getTodosSuccess, (state, { todos }) => ({ ...state, isLoading: false, items: todos })),
    on(getTodosFail, (state) => ({ ...state, isLoading: false })),
    on(addTodoSuccess, (state, { todo }) => ({ ...state, items: state.items.concat(todo) }))
);