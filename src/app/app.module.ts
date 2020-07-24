import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { todosReducer, ITodosState } from './todos/todos.reducer';

export interface IState {
    todos: ITodosState;
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot({ todos: todosReducer }),
        StoreDevtoolsModule.instrument({}),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
