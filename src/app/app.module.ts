import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { todosReducer, ITodosState } from './todos/todos.reducer';
import { TodosComponent } from './todos/todos.component';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './todos/todos.effects';

export interface IState {
    todos: ITodosState;
}

@NgModule({
    declarations: [
        AppComponent,
        TodosComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot({ todos: todosReducer }),
        StoreDevtoolsModule.instrument({}),
        EffectsModule.forRoot([TodosEffects]),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
