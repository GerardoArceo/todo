import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { ToggleTodoAction, EditTodoAction, DeleteTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtInputFisico', null) txtInputFisico: ElementRef;

  chkField: FormControl;
  textInput: FormControl;
  editing = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completed);
    this.textInput = new FormControl(this.todo.text);

    this.chkField.valueChanges.subscribe(value => {
      const action = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(action);
    });
  }

  editar() {
    this.editing = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {
    this.editing = false;
    if (this.textInput.invalid) {
      return;
    }
    if (this.textInput.value === this.todo.text) {
      return;
    }
    const action = new EditTodoAction(this.todo.id, this.textInput.value);
    this.store.dispatch(action);
  }

  eliminar() {
    const action = new DeleteTodoAction(this.todo.id);
    this.store.dispatch(action);
  }

}
