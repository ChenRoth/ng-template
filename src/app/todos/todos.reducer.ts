import { createReducer, on } from '@ngrx/store'
import { getTodos, getTodosSuccess } from './todos.actions';

export interface ITodo {
    id: number;
    description: string;
    date: Date;
    isComplete: boolean;
}

export interface ITodosState {
    items: ITodo[];
    isLoading: boolean;
};

const initialState: ITodosState = {
    items: [],
    isLoading: false,
};

export const todosReducer = createReducer<ITodosState>(initialState,
    on(getTodos, state => ({ ...state, isLoading: true })),
    on(getTodosSuccess, (state, { todos }) => ({ ...state, isLoading: false, items: todos }))
);