import {Action} from '@ngrx/store';

export const SET_FILTER = '[Filter] Establecer filtro';

export class SetFilterAction implements Action {
    readonly type = SET_FILTER;

    constructor(public filter: 'ALL' | 'ACTIVE' | 'COMPLETED') {

    }
}


export type Actions =   SetFilterAction;
