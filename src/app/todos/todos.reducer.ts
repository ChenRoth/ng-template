import { createReducer } from '@ngrx/store'

export interface ITodo {
    id: number;
    description: string;
    date: Date;
    isComplete: boolean;
}

export type ITodosState = ITodo[];

const initialState: ITodosState = [];

export const todosReducer = createReducer<ITodosState>(initialState);