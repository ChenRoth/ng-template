import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from '../app.module';
import { getTodos, getTodosSuccess } from './todos.actions';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

    constructor(private store: Store<IState>) { }

    ngOnInit(): void {

    }

}
