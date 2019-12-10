import * as fromFilter from './filter.actions';

const initialState = 'ALL';

export function filterReducer(state = initialState,
                              action: fromFilter.Actions) {
    switch (action.type) {
        case fromFilter.SET_FILTER:
            return action.filter;
        default:
            return state;
    }
} 
