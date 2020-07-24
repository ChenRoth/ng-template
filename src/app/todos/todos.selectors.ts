import { createSelector } from '@ngrx/store';
import { IState } from '../app.module';

export const selectAllTodos = createSelector(
    // we provide createSelector a number of (state) => any functions
    // the last function will have as parameters the values of all previous functions
    (state: IState) => state.todos,
    // todos is the result of the function above
    todos => todos.items
);

export const selectCompleteTodos = createSelector(
    selectAllTodos,
    items => items.filter(item => item.isComplete),
);

export const selectIncompleteTodos = createSelector(
    selectAllTodos,
    items => items.filter(item => !item.isComplete)
);
