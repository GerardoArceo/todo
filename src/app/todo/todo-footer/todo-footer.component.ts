import { Component, OnInit } from '@angular/core';

import * as fromFilter from '../../filter/filter.actions';
import * as fromTodo from '../../todo/todo.actions';

import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  actives: number;
  filters = ['ALL', 'ACTIVE', 'COMPLETED'];
  actualFilter: string;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.countActive(state.todos);
      this.actualFilter = state.filter;
    });
  }

  changeFilter(newFilter: 'ALL' | 'ACTIVE' | 'COMPLETED') {
    const action = new fromFilter.SetFilterAction(newFilter);
    this.store.dispatch(action);
  }

  countActive(todos: Todo[]) {
    this.actives = todos.filter(todo => !todo.completed).length;
  }

  clearCompleted() {
    const action = new fromTodo.DeleteAllTodoAction();
    this.store.dispatch(action);
  }
}
