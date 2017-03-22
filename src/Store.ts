import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import data from '../public/data.js';
const { shows } = data;
/**
 * Redux is for app state, and views can hold on to their own state?
 */
const SET_SEARCH_TERM = 'setSearchTerm';
const initialState = {
    searchTerm: '',
    shows
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

const mapStateToProps = (state: any) => ({
    searchTerm: state.searchTerm,
    shows: state.shows
});
const mapDispatchToProps = (dispatch: any) => {
    return {
        setSearchTerm(searchTerm: string) {
            dispatch({ type: SET_SEARCH_TERM, value: searchTerm });
        }
    };
};

declare var window: any;
const store = Redux.createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const connector = ReactRedux.connect(mapStateToProps, mapDispatchToProps);
export { connector, store, rootReducer };
