import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FakeTodoServerService } from './fake-todo-server.service';
import { TodosComponent } from './todos/todos.component';
import { TodosEffects } from './todos/todos.effects';
import { ITodosState, todosReducer } from './todos/todos.reducer';



export interface IState {
    todos: ITodosState;
}

@NgModule({
    declarations: [
        AppComponent,
        TodosComponent,
        AddTodoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
            FakeTodoServerService, { dataEncapsulation: false }
        ),
        StoreModule.forRoot({ todos: todosReducer }),
        StoreDevtoolsModule.instrument({}),
        EffectsModule.forRoot([TodosEffects]),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
