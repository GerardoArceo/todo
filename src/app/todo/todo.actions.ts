import {Action} from '@ngrx/store';

export const TOGGLE_TODO = '[TODO] Cambiar estado de todo';
export const TOGGLE_ALL_TODO = '[TODO] Cambiar estado de todos los todo';
export const ADD_TODO = '[TODO] Agregar todo';
export const EDIT_TODO = '[TODO] Editar todo';
export const DELETE_TODO = '[TODO] Eliminar todo';
export const DELETE_ALL_TODO = '[TODO] Eliminar todos los todo';

export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;
    constructor(public id: number) {}
}

export  class AddTodoAction implements Action {
    readonly type = ADD_TODO;
    constructor(public text: string) {}
}

export  class EditTodoAction implements Action {
    readonly type = EDIT_TODO;
    constructor(public id: number, public text: string) {}
}

export  class DeleteTodoAction implements Action {
    readonly type = DELETE_TODO;
    constructor(public id: number) {}
}

export  class DeleteAllTodoAction implements Action {
    readonly type = DELETE_ALL_TODO;
}

export  class ToggleAllTodoAction implements Action {
    readonly type = TOGGLE_ALL_TODO;
    constructor(public completed: boolean) {}
}

export type Actions =   ToggleTodoAction |
                        ToggleAllTodoAction |
                        AddTodoAction |
                        EditTodoAction |
                        DeleteTodoAction |
                        DeleteAllTodoAction;
