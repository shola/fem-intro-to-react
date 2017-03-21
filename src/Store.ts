import * as redux from 'redux';
import * as ReactRedux from 'react-redux';

const SET_SEARCH_TERM = 'setSearchTerm';
const initialState = {
    searchTerm: ''
};
const rootReducer = (state = initialState, action: { type: string, action: any }) => {
    switch (action.type) {
        case SET_SEARCH_TERM:
            return reduceSearchTerm(state, action);
        default:
            return state;
    }
};

const reduceSearchTerm = (state: any, action: any) => {
    const newState = {};
    Object.assign(newState, state, { searchTerm: action.value });
    return newState;
};

const store = redux.createStore(rootReducer);
