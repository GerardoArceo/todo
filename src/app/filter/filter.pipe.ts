import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: string): any {
    switch (filter) {
      case 'ALL':
        return todos;
      case 'ACTIVE':
        return todos.filter(todo => !todo.completed);
      case 'COMPLETED':
        return todos.filter(todo => todo.completed);
    }
  }

}
